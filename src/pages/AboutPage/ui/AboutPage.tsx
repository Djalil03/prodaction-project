import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const {t} = useTranslation('about')

  return (
    <div>
        {t('О сайте')}
        {t('О сайте123124a')}
    </div>
  )
}

export default AboutPage

