pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate allure-results --clean -o allure-report'
        bat 'npx allure open allure-report'
      }
    }
  }
}
