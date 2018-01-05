FROM java:8
MAINTAINER Anatoliy Kozel <kozelanatoliy93@gmail.com>

RUN mkdir /backend
RUN mkdir /root/xmlServerFilesStorage
ADD . /backend

EXPOSE 8080
EXPOSE 8890
WORKDIR /backend
ENV GRADLE_OPTS -Dorg.gradle.native=false
CMD ./gradlew liquibaseUpdate && ./gradlew bootRun