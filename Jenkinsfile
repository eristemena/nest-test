pipeline {
  agent any
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

    stage('Test Cov') {
      steps {
        sh 'npm run test:cov'
      }
    }

    stage('Sonarqube') {
      environment {
        scannerHome = 'sonarqube-scanner'
      }
      steps {
        withSonarQubeEnv('sonarqube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }

      }
    }

    stage('Build Docker') {
      steps {
        sh 'sh "echo \'why?\'"'
      }
    }

  }
  tools {
    nodejs 'node'
  }
}