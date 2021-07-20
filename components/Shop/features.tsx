import Image from 'next/image'
import { FeatureProps } from '../../interfaces'
import { FeatureItem } from './featureItem'



export const Features = ({features}: FeatureProps) => {
    return (
        <div className="features">
        <div className="container">
          {features.map(feature => (
              <FeatureItem id = {feature.id} key = {feature.id} icon = {feature.icon} title ={feature.title}/>
          ))}
        </div>
      </div>
    )
} 