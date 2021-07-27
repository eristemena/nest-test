pipeline {
  agent any
  stages {
    stage('Build Assets') {
      agent any
      steps {
        echo 'Building Assets...'
        withSonarQubeEnv(installationName: 'sonarqube', envOnly: true)
      }
    }

    stage('Test') {
      agent any
      steps {
        echo 'Testing stuff...'
      }
    }

  }
}