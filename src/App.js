import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  const stars = Array.from({ length: 1000 }); // 100 bintang
  

  return (
    <div
    style={{
      background: "radial-gradient(circle at top left, #05020a, #0b0f3a 60%)",
      color: "white",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
    }}
  >
      {/* Bintang */}
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        return (
          <div
            key={i}
            className="star"
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              opacity: opacity,
              animation: `twinkle ${duration}s infinite alternate`,
            }}
          ></div>
        );
      })}

      <Header />
      <Hero />
      <Features />
      <Technologies />
      <Footer />

      {/* Rocket */}
      {[0,1,2,3,4].map((i) => (
  <div 
    key={i} 
    className="rocket" 
    style={{ 
      left: `${10 + i*18}%`, // posisi horizontal berbeda
      animationDelay: `${i * 1}s` // delay agar tidak bersamaan
    }}
  >
<div class="rocket">
  <div class="nose"></div>
  <div class="body">
    <div class="cockpit"></div>
    <div class="wing-left"></div>
    <div class="wing-right"></div>
    <div class="fire"></div>
  </div>
</div>


  </div>
))}
      <div className="cloud top-left"></div>
<div className="cloud top-right"></div>
<div className="cloud bottom-left"></div>
<div className="cloud bottom-right"></div>

<div className="moon"></div>

      

<style>
{`
  /* Bintang berkedip */
  @keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }

  /* Roket */
.rocket {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  will-change: transform, opacity;
  animation: fly 6s linear infinite;
}

.rocket .body {
  width: 40px;
  height: 80px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  z-index: 2;
}

  .rocket .cockpit {
  width: 20px;
  height: 20px;
  background: #0d6efd;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  border: 2px solid #fff;
}

/* Sayap kiri */
/* Sayap kiri */
/* Sayap kiri */
/* Sayap kiri */
.rocket .wing-left {
  width: 10px;
  height: 30px;
  background: #ff4d4f;
  position: absolute;
  top: 20%;                   /* sedikit di atas tengah */
  left: -10px;               
  transform: translateY(10%) rotate(25deg); 
  border-radius: 0 5px 5px 0;
  z-index: 1;
}

/* Sayap kanan */
.rocket .wing-right {
  width: 10px;
  height: 30px;
  background: #ff4d4f;
  position: absolute;
  top: 35%;                   
  right: -10px;
  transform: translateY(-50%) rotate(-25deg);
  border-radius: 5px 0 0 5px;
  z-index: 1;
}



/* Bagian atas roket: segitiga */
/* Bagian atas roket: segitiga */
.rocket .nose {
  width: 40px;
  height: 20px;
  background: #fff;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  position: relative;
  z-index: 3;
  margin: 0 auto; /* biar di tengah */
}


  .rocket .fire {
    position: absolute;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom, #ff0, #f00);
    border-radius: 50%;
    filter: blur(3px);
    z-index: 1;
    animation: flicker 0.2s infinite alternate;
  }

  .rocket .smoke {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background: rgba(200,200,200,0.5);
    border-radius: 50%;
    filter: blur(4px);
    animation: smokeUp 1s linear infinite;
  }

  /* Awan */
  .cloud {
    position: absolute;
    width: 200px;
    height: 100px;
    background: radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0));
    border-radius: 50%;
    filter: blur(30px);
    animation: drift 20s linear infinite;
    z-index: 1;
  }

  .top-left { top: 0; left: 0; }
  .top-right { top: 0; right: 0; }
  .bottom-left { bottom: 0; left: 0; }
  .bottom-right { bottom: 0; right: 0; }

  /* Animasi */
@keyframes fly {
  0% {
    transform: translate(-50%, 100%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -120vh); /* lebih tinggi dari layar */
    opacity: 0;
  }
}  @keyframes fly {
  0% {
    transform: translate(-50%, 100%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -200vh); /* Terbang jauh ke atas */
    opacity: 0;
  }
}
  @keyframes smokeUp { 0% { transform: translateX(-50%) translateY(0) scale(0.5); opacity: 0.5; } 100% { transform: translateX(-50%) translateY(-80px) scale(1); opacity: 0; } }
  @keyframes drift { 0% { transform: translate(0,0); } 50% { transform: translate(20px,10px); } 100% { transform: translate(0,0); } }
@keyframes moonGlow {
  0%, 100% {
    filter: brightness(1);
    box-shadow: 0 0 20px 5px rgba(255,255,255,0.2);
  }
  50% {
    filter: brightness(1.2);
    box-shadow: 0 0 30px 8px rgba(255,255,255,0.3);
  }
}

@keyframes moonDrift {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(3px, -2px); }
  50%  { transform: translate(0, -3px); }
  75%  { transform: translate(-3px, -2px); }
  100% { transform: translate(0, 0); }
}
  /* Bulan */
 .moon {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 30% 30%, #fff, #aaa);
  border-radius: 50%;
  box-shadow: 0 0 20px 5px rgba(255,255,255,0.2);
  z-index: 5;
  animation: moonGlow 5s ease-in-out infinite, moonDrift 20s linear infinite;
}
  /* Responsive: perkecil bulan */
  @media (max-width: 768px) {
    .moon {
      width: 50px;
      height: 50px;
      top: 30px;
      right: 20px;
    }
  }

  @media (max-width: 480px) {
    .moon {
      width: 35px;
      height: 35px;
      top: 20px;
      right: 15px;
    }
  }
`

}
</style>

    </div>
  );
}
