#!/bin/sh
#
#  Copyright (C) Alexander Iurovetski 2024
#  All rights reserved under MIT license (see LICENSE file)
#
#  Script to set version of every resource file to induce the reload in case of a change
#

# Get this script's name
#
JOB=$(basename "${0}")

# Get the project name. Print usage and fail if it is not specified
#
PRJ="${1}"

# Get the temporary file path
#
TMF="/tmp/${PRJ:-x}.tmp"

# Get top input directory
#
TOP="$(dirname $(dirname "${0}"))"

if [ -z "${PRJ}" ]; then
  # Loop through all IMPORTED files and get the pattern for search and replace
  #
  for scr in $(ls -1 "${TOP}/lib/import/scripts/"); do
    PAT="$(echo "${scr}" | sed -r 's/[0-9\.\-]+/.*/g')"
    SED="s/${PAT}/${scr}/"
    SKP="$(echo "${scr}" | sed -r 's/\./\\./g')"

    # Loop through all relevant files and replace the imports with the one found
    #
    for inp in $(find "${TOP}" -type f | grep -Eiv "\/\.|\/${SKP}" |\
        grep -Ei "\.css$|\.html?$|\.json$|service-worker\.js$"\
    ); do
      sed -r "${SED}" "${inp}" > "${TMF}" && mv -f "${TMF}" "${inp}" || exit 1
    done

    echo "Successfully updated to \"${scr}\""
  done
else
  # Get the pattern for search and replace
  #
  DIR="${TOP}/${PRJ}"
  VER=$(sed -nr 's/^.*\"[Vv](ersion)?\s*([0-9\.\-]+).*$/\2/p' "${DIR}/ux/styles/info.css")
  VST="?v="
  PAT="(\\${VST})[0-9]+(\\.[0-9]+(\\.[0-9]+(\\-[0-9]+)?)?)?"
  SED="s/${PAT}/${VST}${VER}/"

  # Loop through all relevant files and replace the version
  #
  for inp in $(ls -1\
      "${DIR}"/*.html\
      "${DIR}"/manifest.json\
      "${DIR}"/service-worker.js\
      "${DIR}"/ux/styles/*.css\
  ); do
    sed -r "${SED}" "${inp}" > "${TMF}" && mv -f "${TMF}" "${inp}" || exit 1
  done

  echo "Successfully updated to version \"${VER}\""
fi

# Perform the cleanup, inform and finish
#
rm -f "${TMF}"