pipeline {
  agent any
  stages {
    stage('Build Assets') {
      agent any
      steps {
        echo 'Building Assets...'
      }
    }

    stage('Test') {
      agent any
      steps {
        withSonarQubeEnv(installationName: 'sonarqube', envOnly: true) {
          println "${env.SONAR_HOST_URL}"
        }
        
        withSonarQubeEnv(installationName: 'sonarqube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

  }
}
