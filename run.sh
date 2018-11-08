#!/bin/bash

set -e

/usr/local/bin/envconsul -consul $CONSUL_SERVER -token $CONSUL_TOKEN -prefix $DEPLOY_ENV/ npm start
