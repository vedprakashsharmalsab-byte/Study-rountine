"use client";

import React, { useState } from "react";
import { Maximize2, ZoomIn, ZoomOut, CheckCircle2, Sparkles, Layers } from "lucide-react";

interface BiologySchematicProps {
  id: string;
  title: string;
  isDark: boolean;
}

export default function BiologyVisualSchematic({
  id,
  title,
  isDark
}: BiologySchematicProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const bgClass = isDark ? "bg-[#090e1a] border-emerald-500/20" : "bg-emerald-50/40 border-emerald-200";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const strokePrimary = isDark ? "#34d399" : "#059669";

  const renderSVG = () => {
    switch (id) {
      // -------------------------------------------------------------
      // 1. HUMAN HEART (DOUBLE CIRCULATION)
      // -------------------------------------------------------------
      case "bio_heart":
      case "bio_heart_double_circulation":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Heart Muscle Exterior Frame */}
            <path
              d="M 260 60 C 200 10 130 50 130 130 C 130 220 230 290 260 310 C 290 290 390 220 390 130 C 390 50 320 10 260 60 Z"
              fill={isDark ? "#1e1b2e" : "#fdf2f4"}
              stroke="#e11d48"
              strokeWidth="4"
            />

            {/* Central Muscular Interventricular Septum */}
            <path d="M 260 90 L 260 300" stroke={strokePrimary} strokeWidth="12" strokeLinecap="round" opacity="0.8" />
            <text x="260" y="325" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Muscular Septum (Prevents Blood Mixing)</text>

            {/* RIGHT SIDE (Deoxygenated - Blue) */}
            {/* Superior Vena Cava */}
            <rect x="155" y="15" width="28" height="60" rx="6" fill="#0284c7" opacity="0.9" />
            <path d="M 169 25 L 169 55" stroke="#fff" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
            <text x="145" y="25" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="end">Superior Vena Cava</text>
            <text x="145" y="36" fill={textMuted} fontSize="8" textAnchor="end">(From Upper Body)</text>

            {/* Right Atrium */}
            <rect x="150" y="75" width="95" height="70" rx="14" fill="#0284c7" opacity="0.25" stroke="#0284c7" strokeWidth="2" />
            <text x="195" y="105" fill="#38bdf8" fontSize="12" fontWeight="black" textAnchor="middle">Right Atrium</text>
            <text x="195" y="120" fill={textMuted} fontSize="9" textAnchor="middle">(Deoxygenated Blood)</text>

            {/* Tricuspid Valve */}
            <line x1="165" y1="150" x2="225" y2="150" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,3" />
            <text x="130" y="153" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="end">Tricuspid Valve</text>

            {/* Right Ventricle */}
            <rect x="150" y="160" width="95" height="95" rx="14" fill="#0284c7" opacity="0.35" stroke="#0284c7" strokeWidth="2" />
            <text x="195" y="200" fill="#38bdf8" fontSize="12" fontWeight="black" textAnchor="middle">Right Ventricle</text>
            <text x="195" y="215" fill={textMuted} fontSize="9" textAnchor="middle">(Pumps to Lungs)</text>

            {/* Pulmonary Artery (To Lungs) */}
            <path d="M 215 160 Q 215 70 195 20" fill="none" stroke="#0ea5e9" strokeWidth="6" />
            <text x="195" y="12" fill="#0ea5e9" fontSize="9" fontWeight="bold" textAnchor="middle">Pulmonary Artery (To Lungs)</text>

            {/* LEFT SIDE (Oxygenated - Red) */}
            {/* Pulmonary Veins (From Lungs) */}
            <rect x="335" y="30" width="24" height="45" rx="4" fill="#ef4444" opacity="0.9" />
            <text x="375" y="42" fill="#f87171" fontSize="9" fontWeight="bold">Pulmonary Veins</text>
            <text x="375" y="53" fill={textMuted} fontSize="8">(From Lungs: O₂-Rich)</text>

            {/* Left Atrium */}
            <rect x="275" y="75" width="95" height="70" rx="14" fill="#ef4444" opacity="0.25" stroke="#ef4444" strokeWidth="2" />
            <text x="325" y="105" fill="#f87171" fontSize="12" fontWeight="black" textAnchor="middle">Left Atrium</text>
            <text x="325" y="120" fill={textMuted} fontSize="9" textAnchor="middle">(Receives Oxygenated)</text>

            {/* Bicuspid / Mitral Valve */}
            <line x1="290" y1="150" x2="350" y2="150" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,3" />
            <text x="390" y="153" fill="#f59e0b" fontSize="8" fontWeight="bold">Bicuspid / Mitral Valve</text>

            {/* Left Ventricle (Thickest Wall) */}
            <rect x="275" y="160" width="95" height="95" rx="14" fill="#ef4444" opacity="0.35" stroke="#ef4444" strokeWidth="3" />
            <text x="325" y="195" fill="#f87171" fontSize="12" fontWeight="black" textAnchor="middle">Left Ventricle</text>
            <text x="325" y="210" fill={textMuted} fontSize="9" textAnchor="middle">(Thick Wall: Highest Pressure)</text>

            {/* Aorta Arch (To Entire Body) */}
            <path d="M 310 160 Q 310 40 260 20 Q 230 10 240 0" fill="none" stroke="#dc2626" strokeWidth="8" />
            <text x="270" y="15" fill="#dc2626" fontSize="11" fontWeight="black">Main Aorta (To Entire Body)</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 2. HUMAN RESPIRATORY SYSTEM
      // -------------------------------------------------------------
      case "bio_respiratory_system":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Nasal Cavity & Pharynx */}
            <path d="M 230 20 Q 260 20 260 45" fill="none" stroke={strokePrimary} strokeWidth="3" />
            <text x="220" y="25" fill={textPrimary} fontSize="9" fontWeight="bold" textAnchor="end">Nasal Passage & Pharynx</text>

            {/* Larynx */}
            <rect x="250" y="45" width="20" height="15" rx="3" fill="#f59e0b" opacity="0.8" />
            <text x="280" y="55" fill="#f59e0b" fontSize="9" fontWeight="bold">Larynx (Voice Box)</text>

            {/* Trachea with Cartilage Rings */}
            <rect x="252" y="60" width="16" height="60" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokePrimary} strokeWidth="2" />
            {[68, 76, 84, 92, 100, 108, 116].map((y) => (
              <line key={y} x1="250" y1={y} x2="270" y2={y} stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            ))}
            <text x="280" y="90" fill="#38bdf8" fontSize="9" fontWeight="bold">Trachea (C-Shaped Cartilage Rings)</text>

            {/* Primary Bronchi */}
            <path d="M 260 120 L 210 150" stroke={strokePrimary} strokeWidth="4" />
            <path d="M 260 120 L 310 150" stroke={strokePrimary} strokeWidth="4" />
            <text x="200" y="140" fill={textMuted} fontSize="8" textAnchor="end">Right Bronchus</text>
            <text x="320" y="140" fill={textMuted} fontSize="8">Left Bronchus</text>

            {/* Right Lung Outline */}
            <path
              d="M 200 135 C 150 135 120 180 120 240 C 120 280 160 290 210 285 C 225 285 225 220 200 135 Z"
              fill={isDark ? "#1e293b" : "#fee2e2"}
              stroke="#f43f5e"
              strokeWidth="2.5"
            />
            {/* Left Lung Outline (with Cardiac Notch) */}
            <path
              d="M 320 135 C 370 135 400 180 400 240 C 400 280 360 290 310 285 C 290 285 300 240 315 220 C 305 180 305 150 320 135 Z"
              fill={isDark ? "#1e293b" : "#fee2e2"}
              stroke="#f43f5e"
              strokeWidth="2.5"
            />
            <text x="360" y="220" fill="#f43f5e" fontSize="9" fontWeight="bold">Cardiac Notch (Left Lung)</text>

            {/* Bronchiole Network Inside Lungs */}
            <path d="M 210 150 L 170 180 M 170 180 L 150 220 M 170 180 L 185 210" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 310 150 L 350 180 M 350 180 L 370 220 M 350 180 L 335 210" stroke="#f59e0b" strokeWidth="2" />

            {/* Magnified Alveolus Cluster Callout */}
            <circle cx="150" cy="220" r="16" fill="#fb7185" opacity="0.6" stroke="#e11d48" strokeWidth="2" />
            <circle cx="140" cy="215" r="7" fill="#fda4af" />
            <circle cx="155" cy="215" r="7" fill="#fda4af" />
            <circle cx="148" cy="228" r="7" fill="#fda4af" />
            <text x="110" y="240" fill="#e11d48" fontSize="9" fontWeight="black" textAnchor="end">Alveoli (Air Sacs)</text>
            <text x="110" y="252" fill={textMuted} fontSize="7" textAnchor="end">O₂ / CO₂ Diffusion Boundary</text>

            {/* Muscular Diaphragm at bottom */}
            <path d="M 110 295 Q 260 270 410 295" fill="none" stroke={strokePrimary} strokeWidth="5" strokeLinecap="round" />
            <text x="260" y="315" fill={strokePrimary} fontSize="11" fontWeight="black" textAnchor="middle">Muscular Diaphragm (Flattens on Inhalation)</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 3. NEPHRON & HUMAN EXCRETORY SYSTEM
      // -------------------------------------------------------------
      case "bio_nephron_excretory":
      case "bio_excretion_nephron":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Left Pane: Macro Excretory System */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="160" height="290" rx="12" fill={isDark ? "#0b0f19" : "#f8fafc"} stroke={strokePrimary} strokeWidth="1.5" />
              <text x="80" y="20" fill={strokePrimary} fontSize="10" fontWeight="bold" textAnchor="middle">Human Excretory System</text>
              {/* Left & Right Kidneys */}
              <path d="M 35 70 C 20 85 20 120 35 135 C 45 125 45 80 35 70 Z" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <path d="M 125 70 C 140 85 140 120 125 135 C 115 125 115 80 125 70 Z" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <text x="80" y="80" fill={textPrimary} fontSize="9" fontWeight="bold" textAnchor="middle">Kidneys (Bean-Shaped)</text>

              {/* Renal Artery & Vein */}
              <line x1="75" y1="50" x2="75" y2="160" stroke="#dc2626" strokeWidth="4" />
              <line x1="85" y1="50" x2="85" y2="160" stroke="#0284c7" strokeWidth="4" />

              {/* Ureters running down */}
              <path d="M 40 115 Q 50 180 65 220" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <path d="M 120 115 Q 110 180 95 220" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <text x="80" y="180" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">Ureters</text>

              {/* Urinary Bladder & Urethra */}
              <ellipse cx="80" cy="235" rx="25" ry="18" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" strokeWidth="2" />
              <text x="80" y="238" fill={textPrimary} fontSize="8" fontWeight="bold" textAnchor="middle">Urinary Bladder</text>
              <line x1="80" y1="253" x2="80" y2="275" stroke={strokePrimary} strokeWidth="3" />
              <text x="80" y="285" fill={textMuted} fontSize="8" textAnchor="middle">Urethra</text>
            </g>

            {/* Right Pane: Microscopic Nephron Functional Unit */}
            <g transform="translate(195, 20)">
              <rect x="0" y="0" width="310" height="290" rx="12" fill={isDark ? "#0b0f19" : "#f8fafc"} stroke="#eab308" strokeWidth="1.5" />
              <text x="155" y="20" fill="#eab308" fontSize="10" fontWeight="bold" textAnchor="middle">Structure of a Single Nephron</text>

              {/* Glomerulus & Afferent/Efferent Arterioles */}
              <circle cx="65" cy="65" r="16" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeWidth="2" />
              <path d="M 60 55 Q 65 75 70 55" stroke="#dc2626" strokeWidth="3" fill="none" />
              <text x="65" y="42" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Glomerulus (Capillary Knot)</text>

              {/* Bowman's Capsule (Double walled cup) */}
              <path d="M 45 50 C 35 75 55 95 85 85 C 95 80 95 60 85 50" fill="none" stroke="#eab308" strokeWidth="3" />
              <text x="65" y="105" fill="#eab308" fontSize="8" fontWeight="bold" textAnchor="middle">Bowman's Capsule</text>

              {/* Proximal Convoluted Tubule (PCT) */}
              <path d="M 85 85 Q 115 110 95 130 Q 80 145 105 160" fill="none" stroke="#10b981" strokeWidth="3.5" />
              <text x="135" y="125" fill="#10b981" fontSize="8" fontWeight="bold">PCT (Reabsorption of Glucose/Salts)</text>

              {/* Loop of Henle (Hairpin Loop) */}
              <path d="M 105 160 L 105 240 Q 120 260 135 240 L 135 160" fill="none" stroke="#38bdf8" strokeWidth="3.5" />
              <text x="120" y="268" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Henle's Loop (Water Balance)</text>

              {/* Distal Convoluted Tubule (DCT) */}
              <path d="M 135 160 Q 155 135 180 150 Q 200 160 215 130" fill="none" stroke="#10b981" strokeWidth="3.5" />
              <text x="180" y="115" fill="#10b981" fontSize="8" fontWeight="bold">DCT</text>

              {/* Collecting Duct (Straight vertical tube) */}
              <line x1="225" y1="40" x2="225" y2="270" stroke="#f59e0b" strokeWidth="7" />
              <path d="M 215 130 L 225 130" stroke="#10b981" strokeWidth="3" />
              <line x1="225" y1="70" x2="240" y2="60" stroke="#f59e0b" strokeWidth="3" />
              <line x1="225" y1="180" x2="240" y2="170" stroke="#f59e0b" strokeWidth="3" />
              <text x="240" y="95" fill="#f59e0b" fontSize="9" fontWeight="bold">Collecting Duct</text>
              <text x="240" y="107" fill={textMuted} fontSize="7">(Urine to Ureter)</text>
            </g>
          </svg>
        );

      // -------------------------------------------------------------
      // 4. HUMAN ALIMENTARY CANAL (DIGESTIVE SYSTEM)
      // -------------------------------------------------------------
      case "bio_alimentary_canal":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Buccal Cavity & Salivary Glands */}
            <circle cx="260" cy="25" r="14" fill="#fbcfe8" stroke="#ec4899" strokeWidth="2" />
            <text x="285" y="22" fill="#ec4899" fontSize="9" fontWeight="bold">Mouth / Buccal Cavity</text>
            <text x="285" y="32" fill={textMuted} fontSize="8">Salivary Amylase (Starch → Maltose)</text>

            {/* Oesophagus (Food pipe) */}
            <line x1="260" y1="40" x2="260" y2="105" stroke="#f43f5e" strokeWidth="5" />
            <text x="275" y="75" fill="#f43f5e" fontSize="9" fontWeight="bold">Oesophagus (Peristalsis)</text>

            {/* Stomach (J-shaped) */}
            <path d="M 260 105 C 290 110 305 130 300 160 C 295 180 260 180 240 165 C 235 140 245 120 260 105 Z" fill="#fb7185" opacity="0.5" stroke="#e11d48" strokeWidth="2.5" />
            <text x="315" y="145" fill="#e11d48" fontSize="10" fontWeight="black">Stomach (J-Shaped)</text>
            <text x="315" y="157" fill={textMuted} fontSize="8">HCl + Pepsin + Mucus</text>

            {/* Liver (Triangular, on Right side of body, left on page) */}
            <polygon points="180,95 240,110 210,165" fill="#991b1b" opacity="0.8" stroke="#b91c1c" strokeWidth="2" />
            <text x="175" y="115" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="end">Liver</text>
            <text x="175" y="126" fill={textMuted} fontSize="8" textAnchor="end">(Secretes Bile - Fat Emulsification)</text>

            {/* Gall Bladder Sac */}
            <ellipse cx="225" cy="150" rx="8" ry="12" fill="#15803d" stroke="#16a34a" strokeWidth="2" />
            <text x="180" y="155" fill="#16a34a" fontSize="8" fontWeight="bold" textAnchor="end">Gall Bladder (Stores Bile)</text>

            {/* Pancreas (Leaf-shaped in Duodenum C-loop) */}
            <path d="M 245 165 C 265 155 285 165 295 168 C 285 178 265 175 245 165 Z" fill="#fde047" stroke="#eab308" strokeWidth="2" />
            <text x="315" y="178" fill="#ca8a04" fontSize="9" fontWeight="bold">Pancreas (Trypsin, Lipase, Amylase)</text>

            {/* Small Intestine (Dense Coils in Center) */}
            <circle cx="260" cy="225" r="35" fill="#fed7aa" opacity="0.4" stroke="#f97316" strokeWidth="2" />
            <path d="M 245 210 Q 260 220 275 210 Q 260 230 245 240 Q 260 250 275 240" fill="none" stroke="#ea580c" strokeWidth="3" />
            <text x="260" y="230" fill="#ea580c" fontSize="10" fontWeight="black" textAnchor="middle">Small Intestine</text>
            <text x="260" y="242" fill={textMuted} fontSize="7" textAnchor="middle">Villi Absorption (Final Digestion)</text>

            {/* Large Intestine (Surrounding Frame) */}
            <path d="M 205 260 L 205 185 L 315 185 L 315 260" fill="none" stroke="#84cc16" strokeWidth="9" strokeLinecap="round" opacity="0.6" />
            <text x="325" y="210" fill="#65a30d" fontSize="9" fontWeight="bold">Large Intestine (Water Absorption)</text>

            {/* Rectum & Anus */}
            <line x1="260" y1="260" x2="260" y2="300" stroke="#713f12" strokeWidth="6" />
            <text x="275" y="295" fill="#713f12" fontSize="9" fontWeight="bold">Rectum & Anal Sphincter</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 5. NEURON & REFLEX ARC
      // -------------------------------------------------------------
      case "bio_neuron_reflex_arc":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Top Half: Single Multipolar Neuron */}
            <g transform="translate(10, 15)">
              {/* Cyton / Cell Body */}
              <polygon points="90,40 120,25 135,50 115,75 80,65" fill="#38bdf8" opacity="0.5" stroke="#0284c7" strokeWidth="2" />
              <circle cx="105" cy="50" r="10" fill="#0369a1" />
              <text x="105" y="53" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Nucleus</text>
              <text x="105" y="18" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle">Cyton (Cell Body)</text>

              {/* Dendrites */}
              <path d="M 90 40 L 55 25 M 55 25 L 35 15 M 55 25 L 45 40" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
              <path d="M 120 25 L 140 5 M 140 5 L 135 -10 M 140 5 L 160 5" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
              <path d="M 80 65 L 50 85 M 50 85 L 35 75 M 50 85 L 40 100" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
              <text x="40" y="55" fill="#0284c7" fontSize="9" fontWeight="bold">Dendrites (Receptors)</text>

              {/* Axon with Myelin Sheath */}
              <line x1="135" y1="50" x2="380" y2="50" stroke="#f59e0b" strokeWidth="4" />
              {/* 4 Myelin Sheath Segments */}
              {[155, 215, 275, 335].map((x, idx) => (
                <rect key={idx} x={x} y="38" width="45" height="24" rx="6" fill="#fde047" stroke="#eab308" strokeWidth="2" />
              ))}
              <text x="250" y="32" fill="#ca8a04" fontSize="9" fontWeight="bold" textAnchor="middle">Axon (Myelin Sheath)</text>

              {/* Nerve Endings (Synaptic Knobs) */}
              <path d="M 380 50 L 420 30 M 420 30 L 440 20 M 420 30 L 435 45" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <path d="M 380 50 L 420 70 M 420 70 L 440 80 M 420 70 L 435 60" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <circle cx="440" cy="20" r="3" fill="#ef4444" />
              <circle cx="435" cy="45" r="3" fill="#ef4444" />
              <circle cx="440" cy="80" r="3" fill="#ef4444" />
              <circle cx="435" cy="60" r="3" fill="#ef4444" />
              <text x="445" y="55" fill="#ef4444" fontSize="9" fontWeight="bold">Nerve Endings (Synapse)</text>
            </g>

            {/* Divider */}
            <line x1="20" y1="130" x2="500" y2="130" stroke={isDark ? "#334155" : "#e2e8f0"} strokeWidth="1" strokeDasharray="4,4" />

            {/* Bottom Half: Complete Reflex Arc Circuit */}
            <g transform="translate(20, 145)">
              <text x="10" y="15" fill={strokePrimary} fontSize="10" fontWeight="black">Reflex Arc Circuit Pathway (Instant Response):</text>

              {/* Skin Receptor */}
              <rect x="10" y="40" width="80" height="40" rx="8" fill="#f43f5e" opacity="0.2" stroke="#f43f5e" strokeWidth="2" />
              <text x="50" y="60" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">Receptor (Skin)</text>
              <text x="50" y="70" fill={textMuted} fontSize="7" textAnchor="middle">(Detects Heat Stimulus)</text>

              {/* Arrow 1: Sensory Neuron */}
              <path d="M 90 60 Q 170 35 230 65" fill="none" stroke="#3b82f6" strokeWidth="3" />
              <text x="160" y="42" fill="#3b82f6" fontSize="9" fontWeight="bold" textAnchor="middle">Sensory Neuron ➔</text>

              {/* Spinal Cord Cross Section Box */}
              <rect x="235" y="35" width="105" height="75" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="2" />
              <text x="287" y="52" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">Spinal Cord (CNS)</text>
              <line x1="255" y1="75" x2="315" y2="75" stroke="#10b981" strokeWidth="3" />
              <text x="287" y="70" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Relay Neuron</text>

              {/* Arrow 2: Motor Neuron */}
              <path d="M 285 90 Q 220 120 140 95" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <text x="200" y="125" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Motor Neuron ➔</text>

              {/* Effector (Arm Muscle) */}
              <rect x="30" y="95" width="100" height="35" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2" />
              <text x="80" y="112" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">Effector Muscle</text>
              <text x="80" y="123" fill={textMuted} fontSize="7" textAnchor="middle">(Hand Pulls Away!)</text>
            </g>
          </svg>
        );

      // -------------------------------------------------------------
      // 6. HUMAN BRAIN ANATOMY
      // -------------------------------------------------------------
      case "bio_brain":
      case "bio_human_brain":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Cranium / Skull Bone Outline */}
            <path d="M 120 220 C 90 140 150 40 270 40 C 390 40 430 130 420 220" fill="none" stroke="#94a3b8" strokeWidth="5" />
            <text x="270" y="30" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">Cranium (Bony Skull Box)</text>

            {/* Cerebrum (Forebrain - Convoluted Sulci & Gyri) */}
            <path d="M 140 210 C 120 130 180 60 270 60 C 360 60 400 130 390 200 C 330 190 300 210 260 210 C 210 210 170 190 140 210 Z" fill="#f43f5e" opacity="0.25" stroke="#f43f5e" strokeWidth="3" />
            {/* Convolutions */}
            <path d="M 180 110 Q 230 80 270 110 Q 320 80 350 120" fill="none" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 190 140 Q 240 120 280 150 Q 320 130 360 160" fill="none" stroke="#f43f5e" strokeWidth="2" />
            <text x="270" y="135" fill="#e11d48" fontSize="13" fontWeight="black" textAnchor="middle">Cerebrum (Forebrain)</text>
            <text x="270" y="150" fill={textMuted} fontSize="9" textAnchor="middle">Thinking, Memory, Voluntary Action, Sensory Areas</text>

            {/* Midbrain */}
            <circle cx="270" cy="180" r="14" fill="#a855f7" opacity="0.7" />
            <text x="270" y="184" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Midbrain</text>

            {/* Hypothalamus & Pituitary Gland */}
            <ellipse cx="240" cy="190" rx="8" ry="6" fill="#f59e0b" />
            <text x="220" y="195" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="end">Pituitary Gland</text>

            {/* Hindbrain: Cerebellum (Tree of Life cauliflower shape) */}
            <path d="M 320 205 C 380 200 400 240 370 270 C 330 285 320 250 320 205 Z" fill="#10b981" opacity="0.4" stroke="#059669" strokeWidth="2" />
            <text x="365" y="240" fill="#059669" fontSize="10" fontWeight="bold">Cerebellum</text>
            <text x="365" y="252" fill={textMuted} fontSize="8">Posture, Balance & Precision</text>

            {/* Hindbrain: Pons */}
            <rect x="255" y="200" width="30" height="20" rx="6" fill="#0ea5e9" opacity="0.5" stroke="#0284c7" strokeWidth="1.5" />
            <text x="235" y="215" fill="#0284c7" fontSize="9" fontWeight="bold" textAnchor="end">Pons (Respiration)</text>

            {/* Hindbrain: Medulla Oblongata */}
            <rect x="260" y="225" width="20" height="30" fill="#6366f1" opacity="0.5" stroke="#4f46e5" strokeWidth="1.5" />
            <text x="235" y="245" fill="#4f46e5" fontSize="9" fontWeight="bold" textAnchor="end">Medulla Oblongata</text>
            <text x="235" y="256" fill={textMuted} fontSize="7" textAnchor="end">BP, Salivation, Vomiting</text>

            {/* Spinal Cord continuation */}
            <line x1="270" y1="255" x2="270" y2="320" stroke="#64748b" strokeWidth="8" />
            <text x="270" y="333" fill={textPrimary} fontSize="9" fontWeight="bold" textAnchor="middle">Spinal Cord (Into Vertebral Column)</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 7. CROSS-SECTION OF LEAF & STOMATA
      // -------------------------------------------------------------
      case "bio_leaf_stomata":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Left: Dicot Leaf Layers Cross Section */}
            <g transform="translate(15, 20)">
              <text x="10" y="15" fill="#059669" fontSize="10" fontWeight="bold">Part A: Leaf Cross-Section Anatomy</text>

              {/* Upper Cuticle & Upper Epidermis */}
              <rect x="10" y="25" width="220" height="8" rx="2" fill="#38bdf8" opacity="0.7" />
              <text x="235" y="32" fill="#0284c7" fontSize="8" fontWeight="bold">Waxy Cuticle</text>
              {[10, 38, 66, 94, 122, 150, 178, 206].map((x, idx) => (
                <rect key={idx} x={x} y="33" width="26" height="20" rx="3" fill="#86efac" stroke="#16a34a" strokeWidth="1" />
              ))}
              <text x="235" y="47" fill="#16a34a" fontSize="8" fontWeight="bold">Upper Epidermis</text>

              {/* Palisade Mesophyll (Dense vertical cells packed with chloroplasts) */}
              {[10, 32, 54, 76, 98, 120, 142, 164, 186, 208].map((x, idx) => (
                <rect key={idx} x={x} y="55" width="20" height="65" rx="4" fill="#22c55e" opacity="0.8" stroke="#15803d" strokeWidth="1" />
              ))}
              <text x="235" y="85" fill="#15803d" fontSize="9" fontWeight="bold">Palisade Mesophyll</text>
              <text x="235" y="96" fill={textMuted} fontSize="7">(Max Photosynthesis)</text>

              {/* Spongy Mesophyll with Air Spaces */}
              <circle cx="30" cy="150" r="14" fill="#4ade80" opacity="0.5" stroke="#16a34a" />
              <circle cx="80" cy="160" r="16" fill="#4ade80" opacity="0.5" stroke="#16a34a" />
              <circle cx="140" cy="150" r="14" fill="#4ade80" opacity="0.5" stroke="#16a34a" />
              <circle cx="190" cy="165" r="15" fill="#4ade80" opacity="0.5" stroke="#16a34a" />
              <text x="235" y="155" fill="#16a34a" fontSize="9" fontWeight="bold">Spongy Layer & Air Cavities</text>

              {/* Lower Epidermis with Stomatal Pore */}
              <rect x="10" y="195" width="80" height="18" rx="2" fill="#86efac" stroke="#16a34a" strokeWidth="1" />
              <rect x="150" y="195" width="80" height="18" rx="2" fill="#86efac" stroke="#16a34a" strokeWidth="1" />
              {/* Guard Cells flanking pore */}
              <ellipse cx="102" cy="204" rx="8" ry="12" fill="#15803d" />
              <ellipse cx="138" cy="204" rx="8" ry="12" fill="#15803d" />
              <text x="120" y="235" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">Stomatal Pore in Lower Surface</text>
            </g>

            {/* Right: Open vs Closed Stomata */}
            <g transform="translate(290, 20)">
              <text x="10" y="15" fill="#10b981" fontSize="10" fontWeight="bold">Part B: Stomatal Regulation (Turgidity)</text>

              {/* Open Stoma (Turgid Guard Cells) */}
              <g transform="translate(10, 40)">
                <text x="90" y="10" fill="#059669" fontSize="10" fontWeight="bold" textAnchor="middle">1. Open Stomatal Pore (Turgid)</text>
                {/* Left kidney guard cell */}
                <path d="M 65 30 C 40 40 40 100 65 110 C 75 95 75 45 65 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                {/* Right kidney guard cell */}
                <path d="M 115 30 C 140 40 140 100 115 110 C 105 95 105 45 115 30 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                {/* Open pore in between */}
                <ellipse cx="90" cy="70" rx="14" ry="24" fill={isDark ? "#090e1a" : "#fff"} stroke="#15803d" strokeWidth="2.5" />
                <circle cx="55" cy="65" r="3" fill="#14532d" />
                <circle cx="125" cy="65" r="3" fill="#14532d" />
                <text x="90" y="130" fill={textMuted} fontSize="8" textAnchor="middle">Water Enters ➔ Guard Cells Swell (Curve Outward)</text>
              </g>

              {/* Closed Stoma (Flaccid Guard Cells) */}
              <g transform="translate(10, 185)">
                <text x="90" y="10" fill="#e11d48" fontSize="10" fontWeight="bold" textAnchor="middle">2. Closed Stomatal Pore (Flaccid)</text>
                {/* Guard cells pressed straight against each other */}
                <ellipse cx="80" cy="55" rx="12" ry="32" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                <ellipse cx="100" cy="55" rx="12" ry="32" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                <line x1="90" y1="25" x2="90" y2="85" stroke="#14532d" strokeWidth="3" />
                <text x="90" y="105" fill={textMuted} fontSize="8" textAnchor="middle">Water Leaves ➔ Guard Cells Shrink (Pore Closes)</text>
              </g>
            </g>
          </svg>
        );

      // -------------------------------------------------------------
      // 8. LONGITUDINAL SECTION OF A FLOWER
      // -------------------------------------------------------------
      case "bio_flower_ls":
      case "bio_flower_anatomy":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Receptacle & Pedicel */}
            <path d="M 230 310 L 260 270 L 290 310" stroke="#15803d" strokeWidth="8" strokeLinecap="round" />
            <text x="260" y="330" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">Pedicel (Flower Stalk)</text>
            <ellipse cx="260" cy="270" rx="35" ry="14" fill="#16a34a" />
            <text x="190" y="275" fill="#16a34a" fontSize="9" fontWeight="bold" textAnchor="end">Thalamus / Receptacle</text>

            {/* Sepals (Calyx) */}
            <path d="M 225 270 Q 160 250 140 280 Q 190 275 230 270" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <path d="M 295 270 Q 360 250 380 280 Q 330 275 290 270" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <text x="130" y="295" fill="#15803d" fontSize="9" fontWeight="bold">Sepal (Calyx)</text>

            {/* Large Colorful Petals (Corolla) */}
            <path d="M 220 260 C 120 210 90 90 190 60 C 230 80 240 160 240 220 Z" fill="#f43f5e" opacity="0.4" stroke="#e11d48" strokeWidth="2.5" />
            <path d="M 300 260 C 400 210 430 90 330 60 C 290 80 280 160 280 220 Z" fill="#f43f5e" opacity="0.4" stroke="#e11d48" strokeWidth="2.5" />
            <text x="120" y="80" fill="#e11d48" fontSize="11" fontWeight="black">Petal (Corolla)</text>

            {/* FEMALE CARPEL / PISTIL (Center) */}
            {/* Ovary */}
            <ellipse cx="260" cy="225" rx="30" ry="35" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
            {/* Ovule Inside Ovary */}
            <circle cx="260" cy="225" r="14" fill="#ca8a04" opacity="0.7" />
            <text x="260" y="228" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Ovule (Egg)</text>
            <text x="190" y="230" fill="#ca8a04" fontSize="10" fontWeight="bold" textAnchor="end">Swollen Ovary</text>

            {/* Style (Slender neck) */}
            <line x1="260" y1="190" x2="260" y2="90" stroke="#ca8a04" strokeWidth="6" />
            <text x="210" y="140" fill="#ca8a04" fontSize="9" fontWeight="bold">Style</text>

            {/* Stigma (Sticky Landing Platform) */}
            <ellipse cx="260" cy="85" rx="18" ry="10" fill="#eab308" stroke="#a16207" strokeWidth="2.5" />
            <text x="260" y="70" fill="#a16207" fontSize="10" fontWeight="black" textAnchor="middle">Sticky Stigma</text>

            {/* MALE STAMEN (Left & Right) */}
            {/* Left Stamen */}
            <path d="M 235 250 Q 180 200 190 110" fill="none" stroke="#f59e0b" strokeWidth="3" />
            <ellipse cx="190" cy="105" rx="10" ry="14" fill="#d97706" stroke="#78350f" strokeWidth="2" />
            <text x="160" y="108" fill="#d97706" fontSize="9" fontWeight="bold" textAnchor="end">Anther (Pollen Grains)</text>
            <text x="170" y="180" fill="#f59e0b" fontSize="8" fontWeight="bold">Filament</text>

            {/* Right Stamen */}
            <path d="M 285 250 Q 340 200 330 110" fill="none" stroke="#f59e0b" strokeWidth="3" />
            <ellipse cx="330" cy="105" rx="10" ry="14" fill="#d97706" stroke="#78350f" strokeWidth="2" />
            <text x="350" y="108" fill="#d97706" fontSize="9" fontWeight="bold">Anther</text>
            <text x="340" y="180" fill="#f59e0b" fontSize="8" fontWeight="bold">Filament</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 8B. GERMINATION OF POLLEN ON STIGMA (NCERT FIG 7.8)
      // -------------------------------------------------------------
      case "bio_pollen_germination":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Stigma (Upper Sticky Surface) */}
            <path
              d="M 210 50 C 210 25 240 25 260 40 C 280 25 310 25 310 50 C 310 70 290 85 285 100 L 235 100 C 230 85 210 70 210 50 Z"
              fill={isDark ? "#14532d" : "#bbf7d0"}
              stroke="#15803d"
              strokeWidth="2.5"
            />
            <text x="325" y="45" fill="#15803d" fontSize="10" fontWeight="bold">Stigma (Sticky Surface)</text>
            <text x="325" y="58" fill={textMuted} fontSize="8">(Secretes Sugary Fluid)</text>

            {/* Ungerminated Pollen Grains */}
            <circle cx="230" cy="38" r="6" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="285" cy="40" r="5" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />

            {/* Germinating Pollen Grain */}
            <circle cx="260" cy="35" r="8" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
            <text x="175" y="32" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="end">Pollen Grain (n)</text>

            {/* Style (Slender Neck) */}
            <path d="M 235 100 L 235 210 Q 235 240 180 260" fill="none" stroke="#15803d" strokeWidth="2.5" />
            <path d="M 285 100 L 285 210 Q 285 240 340 260" fill="none" stroke="#15803d" strokeWidth="2.5" />
            <text x="325" y="145" fill="#15803d" fontSize="10" fontWeight="bold">Style (Slender Neck)</text>
            <text x="325" y="157" fill={textMuted} fontSize="8">(Passage for Pollen Tube)</text>

            {/* Pollen Tube Growing Down Style */}
            <path
              d="M 260 43 L 260 215 Q 260 250 240 270 Q 225 285 235 300 Q 248 312 260 305"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <text x="145" y="140" fill="#d97706" fontSize="10" fontWeight="bold" textAnchor="end">Pollen Tube</text>
            <text x="145" y="152" fill={textMuted} fontSize="8" textAnchor="end">(Chemotropic Growth)</text>

            {/* Two Male Gametes inside Pollen Tube */}
            <circle cx="260" cy="115" r="3" fill="#ef4444" />
            <circle cx="260" cy="130" r="3" fill="#ef4444" />
            <line x1="265" y1="122" x2="310" y2="122" stroke="#ef4444" strokeWidth="1.5" />
            <text x="315" y="125" fill="#ef4444" fontSize="9" fontWeight="bold">2 Male Germ Cells (Gametes)</text>

            {/* Ovary (Swollen Basal Chamber) */}
            <path
              d="M 180 260 C 140 280 140 330 260 330 C 380 330 380 280 340 260"
              fill={isDark ? "#1e293b" : "#f0fdf4"}
              stroke="#15803d"
              strokeWidth="2.5"
            />
            <text x="390" y="285" fill="#15803d" fontSize="10" fontWeight="bold">Ovary</text>
            <text x="390" y="297" fill={textMuted} fontSize="8">(Develops into Fruit)</text>

            {/* Ovule inside Ovary */}
            <ellipse cx="260" cy="285" rx="38" ry="32" fill={isDark ? "#0f172a" : "#fff"} stroke="#0284c7" strokeWidth="2" />
            <text x="260" y="275" fill="#0284c7" fontSize="9" fontWeight="bold" textAnchor="middle">Ovule (Becomes Seed)</text>

            {/* Female Germ Cell / Egg inside Ovule */}
            <circle cx="260" cy="298" r="6" fill="#ec4899" stroke="#be185d" strokeWidth="1.5" />
            <text x="260" y="316" fill="#be185d" fontSize="8" fontWeight="bold" textAnchor="middle">Female Egg Cell (Syngamy)</text>

            {/* Polar Nuclei */}
            <circle cx="254" cy="286" r="3" fill="#8b5cf6" />
            <circle cx="266" cy="286" r="3" fill="#8b5cf6" />
            <text x="145" y="288" fill="#8b5cf6" fontSize="8" fontWeight="bold" textAnchor="end">Polar Nuclei (Triple Fusion)</text>

            {/* Micropyle Entry Marker */}
            <text x="145" y="315" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="end">Micropyle Entry ➔</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 9. FEMALE & MALE REPRODUCTIVE SYSTEM
      // -------------------------------------------------------------
      case "bio_female_reproduction":
      case "bio_human_reproduction":
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* Uterus / Womb Central Cavity */}
            <path
              d="M 260 90 Q 210 90 200 150 Q 200 210 240 230 L 240 270 L 280 270 L 280 230 Q 320 210 320 150 Q 310 90 260 90 Z"
              fill="#f43f5e"
              opacity="0.25"
              stroke="#e11d48"
              strokeWidth="4"
            />
            <text x="260" y="155" fill="#e11d48" fontSize="13" fontWeight="black" textAnchor="middle">Uterus (Womb)</text>
            <text x="260" y="170" fill={textMuted} fontSize="8" textAnchor="middle">Thick Endometrium (Site of Implantation)</text>

            {/* Fallopian Tubes (Oviducts) Extending Left & Right */}
            {/* Left Oviduct */}
            <path d="M 210 100 Q 120 70 95 130" fill="none" stroke="#f43f5e" strokeWidth="7" />
            {/* Left Fimbriae Funnel */}
            <path d="M 90 125 Q 75 140 90 155" fill="none" stroke="#f43f5e" strokeWidth="4" />
            <text x="120" y="65" fill="#e11d48" fontSize="10" fontWeight="bold">Fallopian Tube / Oviduct</text>
            <text x="120" y="77" fill="#0284c7" fontSize="8" fontWeight="bold">★ Site of Fertilization (Ampulla)</text>

            {/* Right Oviduct */}
            <path d="M 310 100 Q 400 70 425 130" fill="none" stroke="#f43f5e" strokeWidth="7" />
            <path d="M 430 125 Q 445 140 430 155" fill="none" stroke="#f43f5e" strokeWidth="4" />
            <text x="400" y="65" fill="#e11d48" fontSize="10" fontWeight="bold">Oviduct</text>

            {/* Left Ovary */}
            <ellipse cx="110" cy="155" rx="20" ry="14" fill="#fb7185" stroke="#be123c" strokeWidth="2.5" />
            <text x="110" y="185" fill="#be123c" fontSize="9" fontWeight="bold" textAnchor="middle">Left Ovary</text>
            <text x="110" y="196" fill={textMuted} fontSize="7" textAnchor="middle">(Produces Ovum & Estrogen)</text>

            {/* Right Ovary */}
            <ellipse cx="410" cy="155" rx="20" ry="14" fill="#fb7185" stroke="#be123c" strokeWidth="2.5" />
            <text x="410" y="185" fill="#be123c" fontSize="9" fontWeight="bold" textAnchor="middle">Right Ovary</text>

            {/* Cervix & Cervical Canal */}
            <rect x="235" y="240" width="50" height="30" rx="4" fill="#fb7185" opacity="0.4" stroke="#e11d48" strokeWidth="2" />
            <text x="195" y="255" fill="#e11d48" fontSize="9" fontWeight="bold" textAnchor="end">Cervix</text>

            {/* Vagina (Birth Canal) */}
            <rect x="240" y="275" width="40" height="45" rx="6" fill="#f43f5e" opacity="0.3" stroke="#e11d48" strokeWidth="2" />
            <text x="260" y="300" fill="#e11d48" fontSize="10" fontWeight="bold" textAnchor="middle">Vagina</text>
            <text x="260" y="312" fill={textMuted} fontSize="8" textAnchor="middle">(Birth Canal)</text>
          </svg>
        );

      // -------------------------------------------------------------
      // 10. MENDEL'S MONOHYBRID CROSS
      // -------------------------------------------------------------
      case "bio_mendel_cross":
      case "bio_mendel_crosses":
      default:
        return (
          <svg viewBox="0 0 520 340" className="w-full h-auto max-h-[320px] select-none">
            {/* P1 Generation */}
            <g transform="translate(20, 20)">
              <text x="0" y="15" fill={textMuted} fontSize="9" fontWeight="bold">P1 Generation:</text>
              <rect x="90" y="0" width="70" height="25" rx="6" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="1.5" />
              <text x="125" y="17" fill="#10b981" fontSize="11" fontWeight="black" textAnchor="middle">TT (Tall)</text>
              <text x="175" y="17" fill={textPrimary} fontSize="14" fontWeight="bold">×</text>
              <rect x="195" y="0" width="70" height="25" rx="6" fill="#f43f5e" opacity="0.3" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="230" y="17" fill="#f43f5e" fontSize="11" fontWeight="black" textAnchor="middle">tt (Dwarf)</text>
            </g>

            {/* F1 Generation */}
            <g transform="translate(20, 60)">
              <text x="0" y="15" fill={textMuted} fontSize="9" fontWeight="bold">F1 Generation:</text>
              <rect x="90" y="0" width="175" height="25" rx="6" fill="#0284c7" opacity="0.3" stroke="#0284c7" strokeWidth="1.5" />
              <text x="177" y="17" fill="#0284c7" fontSize="11" fontWeight="black" textAnchor="middle">All Tt (100% Tall - Law of Dominance)</text>
            </g>

            {/* F2 Generation Punnett Square Grid */}
            <g transform="translate(20, 105)">
              <text x="0" y="15" fill={textPrimary} fontSize="10" fontWeight="bold">F2 Generation (Tt × Tt Selfing) — Punnett Square:</text>

              <g transform="translate(100, 25)">
                {/* Headers */}
                <rect x="50" y="0" width="60" height="25" fill="#334155" rx="4" />
                <text x="80" y="17" fill="#fff" fontSize="11" fontWeight="black" textAnchor="middle">T</text>
                <rect x="115" y="0" width="60" height="25" fill="#334155" rx="4" />
                <text x="145" y="17" fill="#fff" fontSize="11" fontWeight="black" textAnchor="middle">t</text>

                <rect x="0" y="30" width="45" height="40" fill="#334155" rx="4" />
                <text x="22" y="55" fill="#fff" fontSize="11" fontWeight="black" textAnchor="middle">T</text>
                <rect x="0" y="75" width="45" height="40" fill="#334155" rx="4" />
                <text x="22" y="100" fill="#fff" fontSize="11" fontWeight="black" textAnchor="middle">t</text>

                {/* Cells */}
                {/* Cell 1: TT */}
                <rect x="50" y="30" width="60" height="40" fill="#10b981" opacity="0.4" stroke="#10b981" strokeWidth="2" />
                <text x="80" y="50" fill="#10b981" fontSize="12" fontWeight="black" textAnchor="middle">TT</text>
                <text x="80" y="62" fill={textPrimary} fontSize="7" textAnchor="middle">Pure Tall</text>

                {/* Cell 2: Tt */}
                <rect x="115" y="30" width="60" height="40" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                <text x="145" y="50" fill="#10b981" fontSize="12" fontWeight="black" textAnchor="middle">Tt</text>
                <text x="145" y="62" fill={textPrimary} fontSize="7" textAnchor="middle">Hybrid Tall</text>

                {/* Cell 3: Tt */}
                <rect x="50" y="75" width="60" height="40" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                <text x="80" y="95" fill="#10b981" fontSize="12" fontWeight="black" textAnchor="middle">Tt</text>
                <text x="80" y="107" fill={textPrimary} fontSize="7" textAnchor="middle">Hybrid Tall</text>

                {/* Cell 4: tt */}
                <rect x="115" y="75" width="60" height="40" fill="#f43f5e" opacity="0.4" stroke="#f43f5e" strokeWidth="2" />
                <text x="145" y="95" fill="#f43f5e" fontSize="12" fontWeight="black" textAnchor="middle">tt</text>
                <text x="145" y="107" fill={textPrimary} fontSize="7" textAnchor="middle">Dwarf (Recessive)</text>
              </g>

              {/* Ratios Breakdown Box */}
              <g transform="translate(300, 35)">
                <rect x="0" y="0" width="180" height="90" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokePrimary} strokeWidth="1.5" />
                <text x="90" y="22" fill={strokePrimary} fontSize="10" fontWeight="bold" textAnchor="middle">CBSE Board Ratios:</text>
                <text x="15" y="45" fill="#10b981" fontSize="10" fontWeight="black">Phenotypic Ratio: 3 : 1</text>
                <text x="15" y="58" fill={textMuted} fontSize="8">(3 Tall : 1 Dwarf)</text>
                <text x="15" y="75" fill="#0284c7" fontSize="10" fontWeight="black">Genotypic Ratio: 1 : 2 : 1</text>
                <text x="15" y="86" fill={textMuted} fontSize="8">(1 TT : 2 Tt : 1 tt)</text>
              </g>
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center transition-all select-none`}>
      <div className="w-full flex items-center justify-between gap-2 mb-2">
        <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>NCERT Board Master Diagram: {title}</span>
        </div>
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
        >
          {isZoomed ? <ZoomOut className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          <span>{isZoomed ? "Reset Zoom" : "Deep View"}</span>
        </button>
      </div>

      <div className={`w-full flex items-center justify-center overflow-x-auto transition-all ${isZoomed ? "scale-105" : ""}`}>
        {renderSVG()}
      </div>
    </div>
  );
}
