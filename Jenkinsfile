pipeline {
  agent any
  tools {nodejs "node"}
  
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
         sh 'npm test'
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
