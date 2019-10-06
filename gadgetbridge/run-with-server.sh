#!/bin/sh
# (C) Copyright 2009-2019 Micro Focus or one of its affiliates.

echo "Synchronizing resources from src/ to target/ directory..."
if [ -d "./src/main/resources/demo" ]
then
  cp -vf ./src/main/resources/sv-lab.json ./target/classes
  cp -vf ./src/main/resources/demo/*.js ./target/classes/demo
else
  echo "WARNING: unable to synchronize VSLs and Lab configuration - run script from its directory"
fi

# find JAVA binary
if [ -n "$JAVA_HOME" ]; then
    JAVA_BIN="$JAVA_HOME/bin/java"
    if [ ! -x "$JAVA_BIN" ]; then
        JAVA_BIN="$JAVA_HOME/jre/bin/java"
    fi
else
    JAVA_BIN=`which java`
fi
if [ -z "$JAVA_BIN" ] || [ ! -x "$JAVA_BIN" ]; then
    echo "No Java found. Please put Java bin directory into your PATH environment or set JAVA_HOME environment variable to valid Java installation."
    exit 1
fi

${JAVA_BIN} -cp target/classes:../../lib/sv-lab-client-all-5.1.1.jar -Dsv.server.endpoint=https://localhost:8445/api demo.MiBand2 $*
