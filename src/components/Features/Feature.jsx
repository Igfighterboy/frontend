import React, { useState } from 'react'
import './Feature.css'
import { FEATURES } from '../../data'
import FeatureCard from './FeatureCard/FeatureCard'
import FeatureInfocard from './FeatureInfoCard/FeatureInfocard'

const Feature = () => {

  const [selectedFeature, setSelectedFeature] = useState(FEATURES[0]);

  const handleSelectFeature = (data) => {
    setSelectedFeature(data);
  };

  return (
    <section className="feature-container">
      

      <div className="feature-content">
        <div className="feature">
          {FEATURES.map((item) => (
            <FeatureCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedFeature.title === item.title}
            onClick={() => {
              handleSelectFeature(item);
            }}
            />
          ))}
        </div>

        <div className="feature-info">
          <FeatureInfocard
          heading={selectedFeature.title}
          featureInfo={selectedFeature.feainfo}
          />
        </div>
      </div>
    </section>
  )
}

export default Feature