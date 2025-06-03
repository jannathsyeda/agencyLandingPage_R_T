import React from "react";
import PriceIcon from "./Svg/PriceIcon.jsx";
import PricingUpperPart from "./PricingUpperPart.jsx";
import PricingBlock from "./PricingBlock.jsx";

export default function Pricing() {

const featureItems=["Individual configuration",
  "No setup, or hidden fees",
  "Team size: 1 developer",
  "Premium support: 6 months",
  "Free updates: 6 months"
  

]

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <PricingUpperPart
          title="Designed for
                    business
                    teams like yours"
          description="Here at Landwind we focus on
                    markets
                    where technology, innovation, and capital can unlock long-term value and drive economic growth."
        />
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingBlock
            title={"Starter"}
            description={`Best option for personal use & for
                        your next project.`}
            icon={<PriceIcon />}
            features={featureItems}

          />

          <PricingBlock
            title={"Company"}
            description={`Relevant for multiple users,
                        extended
                        & premium support.`}
            icon={<PriceIcon />}
            features={featureItems}

          />

          <PricingBlock
            title={"Enterprise"}
            description={`Best option for personal use & for
                        your next project.`}
            icon={<PriceIcon />}
            features={featureItems}

          />
        </div>
      </div>
    </section>
  );
}
