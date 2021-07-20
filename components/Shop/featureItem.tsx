import Image from 'next/image'

import { FeatureItemProps } from '../../interfaces'

export const FeatureItem = ({icon, title}: FeatureItemProps) => {
    return (
        <div>
            <figure>
              <Image src={icon} alt="Credit Card" />
            </figure>
            <h4>{title}</h4>
          </div>
    )
}