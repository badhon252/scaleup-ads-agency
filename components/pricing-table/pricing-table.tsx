"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface PricingTier {
  id: string;
  period: "YEARLY" | "MONTHLY";
  price: number;
  trialDays: number;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "yearly",
    period: "YEARLY",
    price: 129.99,
    trialDays: 14,
    badge: "BEST VALUE",
  },
  {
    id: "monthly",
    period: "MONTHLY",
    price: 12.99,
    trialDays: 7,
  },
];

const features = [
  "Design should enrich our day",
  "Bring individual experience and creative",
  "Human centred design to challenges",
  "Design through innovation",
  "Developing core web applications",
];

export default function PricingTable() {
  const [selectedTier, setSelectedTier] = useState<string>("yearly");
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fdf6f6] p-8 md:p-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h4 className="text-[1rem] pt-[50px] pb-3 uppercase">Pricing Table</h4>
            <h1 className="mb-12 text-[60px] font-bold tracking-tight">
              BE KIND TO YOUR MIND
            </h1>
            <div className="space-y-4">
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  className="border-b border-black/10"
                  initial={false}
                >
                  <motion.button
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() =>
                      setExpandedFeature(
                        expandedFeature === feature ? null : feature
                      )
                    }
                  >
                    <span className="text-base font-semibold">{feature}</span>
                    <motion.div
                      animate={{
                        rotate: expandedFeature === feature ? 45 : 0,
                      }}
                    >
                      <Plus className="h-5 w-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedFeature === feature && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-gray-600">
                          Additional information about {feature.toLowerCase()}{" "}
                          goes here. This content is expandable and collapsible.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <AnimatePresence>
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card
                      className={`relative overflow-hidden p-6 ${
                        selectedTier === tier.id
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {tier.badge && (
                        <Badge className="absolute right-4 top-4 bg-[#ff9587]">
                          {tier.badge}
                        </Badge>
                      )}
                      <div className="mb-4 text-sm">{tier.period}</div>
                      <div className="mb-4 flex items-baseline">
                        <span className="text-3xl font-bold">
                          ${tier.price}
                        </span>
                        <span className="text-sm opacity-70">.99</span>
                      </div>
                      <div className="mb-6 flex items-center gap-2">
                        <motion.div
                          initial={false}
                          animate={{
                            background:
                              selectedTier === tier.id ? "#ff9587" : "#fff",
                            borderColor:
                              selectedTier === tier.id ? "#ff9587" : "#000",
                          }}
                          className="flex h-5 w-5 items-center justify-center rounded-sm border"
                          onClick={() => setSelectedTier(tier.id)}
                        >
                          <AnimatePresence>
                            {selectedTier === tier.id && (
                              <motion.svg
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="h-3 w-3 text-white"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                />
                              </motion.svg>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        <span className="font-semibold">
                          {tier.trialDays} DAYS FREE
                        </span>
                      </div>
                      <p className="text-sm opacity-70">
                        Subscription fee is ${tier.price} USD and automatically
                        renews each year.
                      </p>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-[#ff9587]"
                        initial={{ width: 0 }}
                        animate={{
                          width: selectedTier === tier.id ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Try It Free Button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            className="group relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-black text-center text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute h-full w-full rounded-full bg-black"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10 group-hover:text-white">
              Try It
              <br />
              Free Now
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
