# TODO: Give each project stage ([build|service] process) its own docker
# SEE: https://docs.docker.com/develop/develop-images/multistage-build/
FROM node:10.16.3 AS everything
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

# A new user has paper trail, home dir in which to build, and limited perm's
# WARN: This consistently results in Docker defect, so we use root, instead
# SEE: https://stackoverflow.com/a/53726938/11817077
# RUN useradd --user-group --create-home ${USER}
# RUN chown -R ${USER}:${USER} ${HOME_DIR}/*
USER ${USER}

# The project needs many directories
# FAQ: A single `src/` directory is not the chosen solution for this redundency
# RFE: Give each directory/service its own repository and docker
# !!!: Solve this, now! Excess layers is bad for performance…
COPY api ${PROJ_DIR}/api
COPY client ${PROJ_DIR}/client
COPY data ${PROJ_DIR}/data
COPY server ${PROJ_DIR}/server
# TODO: Migrate the few source files out of `dist` without decoupling
COPY dist ${PROJ_DIR}/dist

# The assets for some services must be built
# RFE: Use on docker for buildign and one docekr for serving
COPY package.json package-lock.json ${PROJ_DIR}/
WORKDIR ${PROJ_DIR}/
RUN npm install && \
    npm run build

# The distributables belong in different locations
## copy service to /opt/school/
## copy config (if any) to /etc/opt/school/
## configure logs (via RUN) to /var/opt/school/
# …

EXPOSE 9000
WORKDIR ${PROJ_DIR}
CMD ["npm", "start"]

# The following commands should be documented for the user
## ???
# docker build --tag wesb-school-autofill https://github.com/wesleyboar/wesleyb-sample-schoology.git#feature/2-server
# docker run --port 9000:9000 wesb-school-autofill npm start
