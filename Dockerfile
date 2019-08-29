# TODO: Give each project stage ([build|service] process) its own docker
# SEE: https://docs.docker.com/develop/develop-images/multistage-build/
FROM node:10.16.3 AS too-many-services
LABEL version=1.0.0 \
      maintainer=wesleyb@pm.me \
      description="A container for an auto-fill web service"
    # TODO: Create a new user, to use, instead of root
    # !!!: Solve this, now! Big security issue…
ENV USER=root \
    HOME_DIR=/home/${USER} \
    # TODO: Place service files in appropriate directories
    # CONF_DIR=/etc/opt/school-autofill \
    # LOGS_DIR=/var/opt/school-autofill \
    # ASST_DIR=/srv/opt/school-autofill \
    # TODO: Evaluate isolation versus standard, pros and cons
    # PROJ_DIR=/opt/school-autofill \
    PROJ_DIR=${HOME_DIR}/app
    # WARN: This makes `node_modules` not exist when building
    # NODE_ENV=production

# WARN: This is still manually set in docker commands and client app
ARG port=9000
ENV PORT=${port}

# A new user has paper trail, home dir in which to build, and limited perm's
# WARN: This consistently results in Docker defect, so we use root, instead
# SEE: https://stackoverflow.com/a/53726938/11817077
# RUN useradd --user-group --create-home ${USER}
# RUN chown -R ${USER}:${USER} ${HOME_DIR}/*
USER ${USER}

# This overloaded docker needs all source and installation files
# RFE: Give each directory/service its own repository and docker
WORKDIR ${PROJ_DIR}/
COPY . .
RUN npm install && \
    npm run build

# The distributables belong in different locations
## copy service to /opt/school/
## copy config (if any) to /etc/opt/school/
## configure logs (via RUN) to /var/opt/school/
# …

EXPOSE ${port}
CMD ["npm", "build"]
