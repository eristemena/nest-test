pipeline {
  agent any
  tools {nodejs "node"}
  
  stages {
    stage('Example') {
      steps {
        sh 'npm config ls'
      }
    }
    
    stage('Sonarqube') {
      environment {
        scannerHome = tool 'sonarqube-scanner'
      }

      steps {
        withSonarQubeEnv(installationName: 'sonarqube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

  }
}
