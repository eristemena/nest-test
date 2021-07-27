pipeline {
  agent any
  stages {
    stage('Build Assets') {
      agent any
      steps {
        echo 'Building Assets...'
      }
    }

    stage('Sonarqube') {
      environment {
        scannerHome = tool 'SonarQubeScanner'
      }

      steps {
        withSonarQubeEnv(installationName: 'sonarqube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

  }
}
