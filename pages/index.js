import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [bill, setBill] = useState(280)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const savings = Math.round(bill * 0.22)
  const annual = savings * 12
  const payback = bill >= 250 ? 2 : bill >= 150 ? 3 : 4

  const team = [
    { name: 'Mehmet Sonmez', role: 'Co-Founder & CEO', init: 'MS' },
    { name: 'Gary Chen',     role: 'Co-Founder & CTO', init: 'GC' },
    { name: 'Kaylee McNa',   role: 'Head of Product',  init: 'KM' },
    { name: 'Rami Hawi',     role: 'Head of Growth',   init: 'RH' },
  ]

  return (
    <>
      <Head>
        <title>Ankergy — Know every watt. Save every dollar.</title>
        <meta name="description" content="Smart plugs and a thermostat that pay for themselves. $0 upfront — pay monthly from what you save." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* NAV */}
      <nav className={scrolled ? `${styles.nav} ${styles['nav--scrolled']}` : styles.nav}>
        <div className={styles['nav__inner']}>
          <img src="/ankergy-logo.png" alt="Ankergy" className={styles['nav__logo']} style={{filter:"brightness(0) invert(1)"}} />
          <div className={styles['nav__links']}>
            <a href="#how">How it works</a>
            <a href="#products">Products</a>
            <a href="#savings">Savings</a>
            <a href="#team">Team</a>
          </div>
          <a href="#waitlist" className={styles['nav__cta']}>Join Waitlist</a>
        </div>
      </nav>

      <main>

        {/* ── HERO ── */}
        <section className={styles['hero']}>
          <div className={styles['hero__bg']}>
            <div className={styles['hero__orb'] + " " + styles['hero__orb--1']} />
            <div className={styles['hero__orb'] + " " + styles['hero__orb--2']} />
            <div className={styles['hero__grid']} />
          </div>
          <div className={styles['hero__inner']}>
            <div className={styles['hero__left']}>
              <div className={styles['hero__badge']}>Early Access Open</div>
              <h1 className={styles['hero__title']}>
                Know every watt.<br />
                <span className={styles['hero__accent']}>Save every dollar.</span>
              </h1>
              <p className={styles['hero__sub']}>
                Ankergy ships smart plugs and a thermostat to your home — then the app optimizes everything automatically. Pay <strong>$0 upfront.</strong> Pay monthly from what you save.
              </p>
              <div className={styles['hero__stats']}>
                <div className={styles['hero__stat']}>
                  <span className={styles['hero__statnum']}>$61+</span>
                  <span className={styles['hero__statlbl']}>avg monthly savings</span>
                </div>
                <div className={styles['hero__statdiv']} />
                <div className={styles['hero__stat']}>
                  <span className={styles['hero__statnum']}>2 mo</span>
                  <span className={styles['hero__statlbl']}>avg payback period</span>
                </div>
                <div className={styles['hero__statdiv']} />
                <div className={styles['hero__stat']}>
                  <span className={styles['hero__statnum']}>$0</span>
                  <span className={styles['hero__statlbl']}>upfront cost</span>
                </div>
              </div>
              <div className={styles['hero__actions']}>
                <a href="#waitlist" className={styles['btn'] + " " + styles['btn--primary']}>Get Early Access →</a>
                <a href="#how" className={styles['btn'] + " " + styles['btn--ghost']}>See how it works</a>
              </div>
            </div>
            <div className={styles['hero__right']}>
              <div className={styles['hero__phone']}>
                <div className={styles['hero__phone-notch']} />
                <div className={styles['hero__phone-screen']}>
                  <div className={styles['hero__applogo']}>ANKERGY⚡</div>
                  <p className={styles['hero__apptag']}>Know every watt. Save every dollar.</p>
                  <div className={styles['hero__bars']}>
                    {[60,80,95,70,100,85,75,90,65,88,72,95].map((h,i) => (
                      <div key={i} className={styles['hero__bar']} style={{height:`${h}%`, opacity: i===5?1:0.5+i*0.04}} />
                    ))}
                  </div>
                  <div className={styles['hero__appcards']}>
                    <div className={styles['hero__appcard']}>
                      <div className={styles['hero__appcardlbl']}>LIVE</div>
                      <div className={styles['hero__appcardval']}>3.0kW</div>
                    </div>
                    <div className={styles['hero__appcard'] + " " + styles['hero__appcard--mid']}>
                      <div className={styles['hero__appcardlbl']}>TODAY</div>
                      <div className={styles['hero__appcardval']}>$4.82</div>
                    </div>
                    <div className={styles['hero__appcard']}>
                      <div className={styles['hero__appcardlbl']}>SAVED</div>
                      <div className={styles['hero__appcardval'] + " " + styles['hero__appcardval--green']}>$12/mo</div>
                    </div>
                  </div>
                  <div className={styles['hero__appbtn']}>Get Started →</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={styles['marquee']}>
          <div className={styles['marquee__track']}>
            {['$0 Upfront','Pay As You Save','Smart Scheduling','22% Bill Reduction','10 Smart Plugs','1 Thermostat','Real-Time Monitoring','Off-Peak Automation','$0 Upfront','Pay As You Save','Smart Scheduling','22% Bill Reduction','10 Smart Plugs','1 Thermostat','Real-Time Monitoring','Off-Peak Automation'].map((t,i) => (
              <span key={i} className={styles['marquee__item']}>{t} <span className={styles['marquee__dot']}>·</span></span>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <section id="how" className={styles['section']}>
          <div className={styles['container']}>
            <div className={styles['section__head']}>
              <p className={styles['eyebrow']}>How it works</p>
              <h2 className={styles['section__title']}>Three steps to a lower bill</h2>
            </div>
            <div className={styles['steps']}>
              <div className={styles['step']}>
                <div className={styles['step__line']} />
                <div className={styles['step__left']}>
                  <span className={styles['step__tag']}>Step 1</span>
                  <h3 className={styles['step__title']}>Get the hardware free</h3>
                  <p className={styles['step__body']}>We ship 10 smart plugs (SP-1) and a thermostat (T-1) directly to your door. You pay nothing upfront.</p>
                </div>
                <div className={styles['step__right']}>
                  <div className={styles['step__icon']}>📦</div>
                </div>
              </div>
              <div className={styles['step']}>
                <div className={styles['step__line']} />
                <div className={styles['step__left']}>
                  <span className={styles['step__tag']}>Step 2</span>
                  <h3 className={styles['step__title']}>App optimizes your usage</h3>
                  <p className={styles['step__body']}>Ankergy learns your home's patterns and automatically shifts high-draw devices to off-peak rate windows.</p>
                </div>
                <div className={styles['step__right']}>
                  <div className={styles['step__icon']}>📱</div>
                </div>
              </div>
              <div className={styles['step']}>
                <div className={styles['step__line']} />
                <div className={styles['step__left']}>
                  <span className={styles['step__tag']}>Step 3</span>
                  <h3 className={styles['step__title']}>Pay from your savings</h3>
                  <p className={styles['step__body']}>Monthly payments are drawn directly from what you saved on your bill. No savings? No charge.</p>
                </div>
                <div className={styles['step__right']}>
                  <div className={styles['step__icon']}>💸</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="products" className={styles['section'] + " " + styles['section--dark']}>
          <div className={styles['container']}>
            <div className={styles['section__head']}>
              <p className={styles['eyebrow']}>The Ankergy Bundle</p>
              <h2 className={styles['section__title']}>Hardware that pays for itself</h2>
            </div>
            <div className={styles['products']}>
              <div className={styles['product']}>
                <div className={styles['product__img-wrap'] + " " + styles['product__img-wrap--plug']}>
                  <img src="/smart-plug.png" alt="Ankergy Smart Plug SP-1" className={styles['product__img']} />
                </div>
                <div className={styles['product__info']}>
                  <div className={styles['product__badge'] + " " + styles['product__badge--teal']}>SP-1 · 10 units</div>
                  <h3 className={styles['product__name']}>Smart Plug</h3>
                  <p className={styles['product__desc']}>Wi-Fi enabled plugs that track usage and let the app schedule your devices intelligently. Works with any standard outlet.</p>
                  <ul className={styles['product__feats']}>
                    <li>Real-time energy monitoring</li>
                    <li>Remote on/off control</li>
                    <li>Schedule automation</li>
                    <li>Works with Alexa & Google Home</li>
                  </ul>
                  <div className={styles['product__price']}>$4 <span>/ unit</span></div>
                </div>
              </div>
              <div className={styles['product'] + " " + styles['product--flip']}>
                <div className={styles['product__info']}>
                  <div className={styles['product__badge'] + " " + styles['product__badge--amber']}>T-1 · 1 unit</div>
                  <h3 className={styles['product__name']}>Smart Thermostat</h3>
                  <p className={styles['product__desc']}>The single biggest lever on your energy bill. The T-1 learns your schedule and adjusts automatically to cut HVAC costs.</p>
                  <ul className={styles['product__feats']}>
                    <li>AI-powered scheduling</li>
                    <li>Geo-fencing away mode</li>
                    <li>Humidity & air quality sensors</li>
                    <li>Works with all HVAC systems</li>
                  </ul>
                  <div className={styles['product__price'] + " " + styles['product__price--amber']}>$70 <span>/ unit</span></div>
                </div>
                <div className={styles['product__img-wrap'] + " " + styles['product__img-wrap--thermo']}>
                  <img src="/thermostat.webp" alt="Ankergy Smart Thermostat T-1" className={styles['product__img']} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── APP SCREENS ── */}
        <section className={styles['section']}>
          <div className={styles['container']}>
            <div className={styles['section__head']}>
              <p className={styles['eyebrow']}>The App</p>
              <h2 className={styles['section__title']}>Everything in one place</h2>
              <p className={styles['section__sub']}>Real-time tracking, smart tips, and savings breakdown — all from your phone.</p>
            </div>
            <div className={styles['appscreens']}>
              {[
                { title: 'Live Dashboard', desc: 'See exactly what\'s consuming power, right now.' },
                { title: 'Smart Tips', desc: 'Personalized actions that add up to real savings.' },
                { title: 'Pay As You Save', desc: 'Transparent billing tied directly to your savings.' },
              ].map((s,i) => (
                <div key={i} className={styles['appscreen']}>
                  <div className={styles['appscreen__phone']}>
                    <div className={styles['appscreen__notch']} />
                    <div className={styles['appscreen__content']}>
                      <div className={styles['appscreen__num']}>0{i+1}</div>
                      <div className={styles['appscreen__title']}>{s.title}</div>
                      <div className={styles['appscreen__desc']}>{s.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAVINGS CALC ── */}
        <section id="savings" className={styles['section'] + " " + styles['section--dark']}>
          <div className={styles['container']}>
            <div className={styles['savings']}>
              <div className={styles['savings__left']}>
                <p className={styles['eyebrow']}>Savings calculator</p>
                <h2 className={styles['section__title']}>What could you save?</h2>
                <p className={styles['savings__sub']}>Ankergy users cut their electricity bill by an average of 22% in the first month. Slide to see your potential savings.</p>
                <div className={styles['savings__bignum']}>${savings}<span>/mo</span></div>
                <p className={styles['savings__bignumlbl']}>estimated monthly savings</p>
                <div className={styles['savings__row']}>
                  <span>Annual savings</span><strong>${annual}</strong>
                </div>
                <div className={styles['savings__row']}>
                  <span>Payback period</span><strong className={styles['savings__green']}>{payback} months</strong>
                </div>
              </div>
              <div className={styles['savings__right']}>
                <div className={styles['savings__card']}>
                  <p className={styles['savings__cardlbl']}>Your monthly bill</p>
                  <div className={styles['savings__cardamt']}>${bill}</div>
                  <input
                    type="range" min="80" max="500" step="10"
                    value={bill}
                    onChange={e => setBill(Number(e.target.value))}
                    className={styles['savings__slider']}
                  />
                  <div className={styles['savings__sliderrange']}><span>$80</span><span>$500</span></div>
                  <div className={styles['savings__breakdown']}>
                    <div className={styles['savings__brow']}>
                      <span>Monthly savings (22%)</span>
                      <span className={styles['savings__green']}>${savings}</span>
                    </div>
                    <div className={styles['savings__brow']}>
                      <span>Annual savings</span>
                      <span className={styles['savings__green']}>${annual}</span>
                    </div>
                    <div className={styles['savings__bdiv']} />
                    <div className={styles['savings__brow']}>
                      <span style={{fontWeight:600,color:'#fff'}}>Pays for itself in</span>
                      <span className={styles['savings__green'] + " " + styles['savings__bold']}>{payback} months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section id="team" className={styles['section']}>
          <div className={styles['container']}>
            <div className={styles['section__head']}>
              <p className={styles['eyebrow']}>The team</p>
              <h2 className={styles['section__title']}>Built by people who care about energy</h2>
            </div>
            <div className={styles['team']}>
              {team.map((m,i) => (
                <div key={i} className={styles['member']}>
                  <div className={styles['member__avatar']}>{m.init}</div>
                  <div className={styles['member__name']}>{m.name}</div>
                  <div className={styles['member__role']}>{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <section id="waitlist" className={styles['waitlist']}>
          <div className={styles['waitlist__orb']} />
          <div className={styles['container']}>
            <div className={styles['waitlist__inner']}>
              <p className={styles['eyebrow']}>Limited early access</p>
              <h2 className={styles['waitlist__title']}>Be the first to save.</h2>
              <p className={styles['waitlist__sub']}>Rolling out to a limited number of homes first. Drop your email and we'll reach out when your spot is ready.</p>
              {submitted ? (
                <div className={styles['waitlist__success']}>✓ You're on the list — we'll be in touch soon.</div>
              ) : (
                <form className={styles['waitlist__form']} onSubmit={e=>{e.preventDefault();if(email)setSubmitted(true)}}>
                  <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} className={styles['waitlist__input']} required />
                  <button type="submit" className={styles['btn'] + " " + styles['btn--primary']}>Join Waitlist →</button>
                </form>
              )}
              <p className={styles['waitlist__note']}>No spam. No commitments. Cancel anytime.</p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={styles['footer']}>
        <div className={styles['container']}>
          <div className={styles['footer__inner']}>
            <img src="/ankergy-logo.png" alt="Ankergy" className={styles['footer__logo']} style={{filter:"brightness(0) invert(1)"}} />
            <p className={styles['footer__tag']}>Smart energy for every home.</p>
            <p className={styles['footer__copy']}>© 2026 Ankergy. All rights reserved.</p>
            <a href="mailto:ankergyofficial@gmail.com" className={styles['footer__email']}>ankergyofficial@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  )
}
