# RFE: All project services should probably have their own docker!

FROM node:lts-alpine
ENV NODE_ENV=production
# RFE: Create a new user, to use, instead
ENV USER=root
LABEL version=1.0.0 \
      maintainer=wesleyb@pm.me \
      description="A container for an auto-fill web service"
USER ${USER}

# There are lots of directories of which to keep track
ENV HOME_DIR=/home/${USER}
# SEE: https://stackoverflow.com/a/11128102/11817077
ENV CONF_DIR=/etc/opt/school-autofill
ENV LOGS_DIR=/var/opt/school-autofill
ENV ASST_DIR=/srv/opt/school-autofill
# TODO: Evaluate isolation versus standard, pros and cons
# ENV PROJ_DIR=/opt/school-autofill
ENV PROJ_DIR=${HOME_DIR}/app

# A new user has paper trail, home dir in which to build, and limited perm's
# WARN: This causes a bug every time, so we'll use root, instead
# SEE: https://stackoverflow.com/a/53726938/11817077
# RUN useradd --user-group --create-home ${USER}
# RUN chown -R ${USER}:${USER} ${HOME_DIR}/*
# NOTE: Would it be better instead to just ensure the FROM image is clean?
RUN apt-get clean

# The project needs many files
COPY package.json package-lock.json ${PROJ_DIR}/
# TODO: Migrate the few source files out of `dist`
COPY api client data dist server ${PROJ_DIR}/

# The assets for some services must be built
WORKDIR ${PROJ_DIR}/
RUN npm cache clean && \
    npm ci
# FAQ: Because so much will happen, this command gets its own thread(?)
RUN npm run build

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
