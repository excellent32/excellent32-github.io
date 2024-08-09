#!/bin/bash
#if readlink /proc/$$/exe | grep -q "dash"; then
#	echo 'This installer needs to be run with "bash", not "sh".'
#	exit
#fi
#echo /proc/$$/exe
#echo $0
#echo $1
#echo $*
#echo $#
#echo $@
#echo $$
path=readlink test.sh
echo $path
