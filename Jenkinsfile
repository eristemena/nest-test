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
      agent any
      steps {
        environment {
          scannerHome = tool 'SonarQubeScanner'
        }
        
       
        withSonarQubeEnv(installationName: 'sonarqube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

  }
}
