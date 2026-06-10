import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlist = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Ankergy — Smart Energy, Zero Upfront</title>
        <meta name="description" content="Ankergy cuts your electricity bill with smart plugs and a thermostat. Pay nothing upfront — pay monthly from what you save." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>⚡ Ankergy</span>
          <div className={styles.navLinks}>
            <a href="#how">How it works</a>
            <a href="#products">Products</a>
            <a href="#savings">Savings</a>
          </div>
          <a href="#waitlist" className={styles.navCta}>Join Waitlist</a>
        </div>
      </nav>

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Now in early access</div>
          <h1 className={styles.heroTitle}>
            Your electricity bill,<br />
            <span className={styles.heroAccent}>finally under control.</span>
          </h1>
          <p className={styles.heroSub}>
            Ankergy installs smart plugs and a thermostat in your home — then the app optimizes everything automatically. Pay $0 upfront. Pay monthly from what you save.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>$61+</span>
              <span className={styles.statLabel}>avg monthly savings</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>2 mo</span>
              <span className={styles.statLabel}>payback period</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>$0</span>
              <span className={styles.statLabel}>upfront cost</span>
            </div>
          </div>
          <a href="#waitlist" className={styles.heroCta}>Get Early Access →</a>
          <div className={styles.heroGlow} />
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className={styles.section}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={styles.sectionTitle}>Three steps to a lower bill</h2>
          <div className={styles.steps}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>📦</div>
              <h3>Get the hardware free</h3>
              <p>We ship you 10 smart plugs and a thermostat — no upfront payment required.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>📱</div>
              <h3>App optimizes your usage</h3>
              <p>Ankergy learns your habits and automatically schedules devices to run at the cheapest times.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>💸</div>
              <h3>Pay from your savings</h3>
              <p>Your monthly payment comes directly out of what you saved on your bill. No savings? No charge.</p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className={styles.section}>
          <p className={styles.eyebrow}>Products</p>
          <h2 className={styles.sectionTitle}>The Ankergy Bundle</h2>
          <div className={styles.products}>
            <div className={styles.productCard}>
              <div className={styles.productIconWrap} style={{background: 'rgba(12,192,176,0.12)'}}>
                <span className={styles.productIcon}>🔌</span>
              </div>
              <div className={styles.productBadge}>10 units</div>
              <h3 className={styles.productName}>Smart Plugs</h3>
              <p className={styles.productDesc}>Wi-Fi enabled plugs that track usage and let the app schedule your devices intelligently. Works with any outlet.</p>
              <ul className={styles.productFeatures}>
                <li>Real-time energy monitoring</li>
                <li>Remote on/off control</li>
                <li>Schedule automation</li>
                <li>Works with Alexa & Google</li>
              </ul>
              <div className={styles.productPrice}>$4 <span>/ unit</span></div>
            </div>

            <div className={`${styles.productCard} ${styles.productCardFeatured}`}>
              <div className={styles.featuredBadge}>Most impactful</div>
              <div className={styles.productIconWrap} style={{background: 'rgba(244,162,97,0.12)'}}>
                <span className={styles.productIcon}>🌡️</span>
              </div>
              <div className={styles.productBadge} style={{background:'rgba(244,162,97,0.15)', color:'#F4A261'}}>1 unit</div>
              <h3 className={styles.productName}>Smart Thermostat</h3>
              <p className={styles.productDesc}>The single biggest lever on your energy bill. Ankergy's thermostat learns your schedule and adjusts automatically.</p>
              <ul className={styles.productFeatures}>
                <li>AI-powered scheduling</li>
                <li>Geo-fencing (away mode)</li>
                <li>Humidity & air quality sensors</li>
                <li>Works with all HVAC systems</li>
              </ul>
              <div className={styles.productPrice} style={{color:'#F4A261'}}>$70 <span>/ unit</span></div>
            </div>
          </div>
        </section>

        {/* SAVINGS CALC */}
        <section id="savings" className={styles.savingsSection}>
          <div className={styles.savingsInner}>
            <div className={styles.savingsLeft}>
              <p className={styles.eyebrow}>Savings calculator</p>
              <h2 className={styles.sectionTitle}>See what you could save</h2>
              <p className={styles.savingsSub}>Based on the national average, Ankergy users reduce their electricity bill by 22% in the first month.</p>
              <div className={styles.savingsCards}>
                <div className={styles.savingsCard}>
                  <span className={styles.savingsCardNum}>22%</span>
                  <span className={styles.savingsCardLabel}>average bill reduction</span>
                </div>
                <div className={styles.savingsCard}>
                  <span className={styles.savingsCardNum}>$739</span>
                  <span className={styles.savingsCardLabel}>avg annual savings</span>
                </div>
              </div>
            </div>
            <div className={styles.savingsRight}>
              <div className={styles.calcCard}>
                <p className={styles.calcLabel}>Your monthly bill</p>
                <div className={styles.calcBills}>
                  {[100, 150, 200, 280, 350, 400].map(b => (
                    <button
                      key={b}
                      className={styles.calcBill}
                      style={b === 280 ? {background:'rgba(12,192,176,0.2)', borderColor:'#0CC0B0', color:'#0CC0B0'} : {}}
                    >
                      ${b}
                    </button>
                  ))}
                </div>
                <div className={styles.calcResults}>
                  <div className={styles.calcRow}>
                    <span>Monthly savings</span>
                    <span className={styles.calcGreen}>$61.60</span>
                  </div>
                  <div className={styles.calcRow}>
                    <span>Annual savings</span>
                    <span className={styles.calcGreen}>$739</span>
                  </div>
                  <div className={styles.calcDivider} />
                  <div className={styles.calcRow}>
                    <span style={{fontWeight:600, color:'#fff'}}>Pays for itself in</span>
                    <span className={styles.calcGreen} style={{fontSize:'1.1rem'}}>2 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className={styles.waitlistSection}>
          <div className={styles.waitlistInner}>
            <p className={styles.eyebrow}>Limited early access</p>
            <h2 className={styles.waitlistTitle}>Be the first to save.</h2>
            <p className={styles.waitlistSub}>We're rolling out to a limited number of homes first. Drop your email and we'll reach out when your spot is ready.</p>
            {submitted ? (
              <div className={styles.waitlistSuccess}>
                ✓ You're on the list — we'll be in touch soon.
              </div>
            ) : (
              <form className={styles.waitlistForm} onSubmit={handleWaitlist}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={styles.waitlistInput}
                  required
                />
                <button type="submit" className={styles.waitlistBtn}>
                  Join Waitlist →
                </button>
              </form>
            )}
            <p className={styles.waitlistNote}>No spam. No commitments. Cancel anytime.</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.logo}>⚡ Ankergy</span>
          <p>Smart energy for every home.</p>
          <p className={styles.footerSmall}>© 2026 Ankergy. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
