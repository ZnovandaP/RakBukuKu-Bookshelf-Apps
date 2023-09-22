/* eslint-disable max-len */
import React from 'react';
import CardFeature from '../../common/CardFeature';
import TitleContent from '../../common/TitleContent';
import cardFeatureData from '../../../../data/card-feature';
import LineDecoration from '../../common/Decoration';

export default function FeatureSection() {
  return (
    <section className=" flex flex-col justify-center items-center gap-4 bg-fifth p-8 pb-10 dark:bg-dark-secondary sm:gap-6 xl:px-10">
      <TitleContent text="Fitur Utama" brand="RakBukuKu" />
      {/* card container */}
      <div className="container grid-auto gap-6">
        {cardFeatureData.map((data) => (
          <CardFeature key={data.id}>
            <CardFeature.CFHeader icon={data.icon} title={data.title} />
            <LineDecoration />
            <CardFeature.CFBody>
              {data.description}
            </CardFeature.CFBody>
          </CardFeature>
        ))}
      </div>
    </section>
  );
}
