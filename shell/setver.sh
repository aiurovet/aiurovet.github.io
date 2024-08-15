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

# Get top input directory
#
DIR=$(dirname $(dirname "${0}"))"/${PRJ}"

# Get the project name. Print usage and fail if it is not specified
#
PRJ="${1}"
[ -z "${PRJ}" ] && printf "\nUSAGE: <dir>/${JOB} <project-name>\n\n" && exit 1

# Get the temporary file path
#
TMF="/tmp/${PRJ}.tmp"

# Get the pattern for search and replace
#
VER=$(sed -nr 's/^.*\"[Vv](ersion)?\s*([0-9\.\-]+).*$/\2/p' "${DIR}/ux/styles/info.css")
VST="?v="
PAT="(\\${VST})[0-9]+(\\.[0-9]+(\\.[0-9]+(\\-[0-9]+)?)?)?"
SED="s/${PAT}/${VST}${VER}/"

# Loop through all files that contain version references and replace those with the latest version
#
for inp in $(ls -1\
    "${DIR}/index.html"\
    "${DIR}/service-worker.js"\
    "${DIR}/ux/styles/"*.css\
); do
  sed -r "${SED}" "${inp}" > "${TMF}" && mv -f "${TMF}" "${inp}" || exit 1
done

# Perform the cleanup nd finish
#
rm -f "${TMF}"