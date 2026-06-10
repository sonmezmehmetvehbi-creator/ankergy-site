import Head from 'next/head'
import { useState, useEffect } from 'react'

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
    { name: 'Gary Chen', role: 'Co-Founder & CTO', init: 'GC' },
    { name: 'Kaylee McNa', role: 'Head of Product', init: 'KM' },
    { name: 'Rami Hawi', role: 'Head of Growth', init: 'RH' },
  ]

  return (
    <>
      <Head>
        <title>Ankergy — Know every watt. Save every dollar.</title>
        <meta name="description" content="Smart plugs and a thermostat that pay for themselves. $0 upfront." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@700;800&display=swap" rel="stylesheet" />
      </Head>

      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        background: scrolled ? 'rgba(5,9,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition:'all 0.3s',
        padding:'0 2rem', height:'68px',
        display:'flex', alignItems:'center',
      }}>
        <div style={{maxWidth:'1120px',margin:'0 auto',width:'100%',display:'flex',alignItems:'center',gap:'2rem'}}>
          <img src="/ankergy-logo.png" alt="Ankergy" style={{height:'40px',width:'auto'}} />
          <div className='nav-links' style={{display:'flex',gap:'2rem',flex:1}}>
            {['How it works','Products','Savings','Team'].map((l,i) => (
              <a key={i} href={`#${l.toLowerCase().replace(' ','-')}`} style={{fontSize:'0.875rem',color:'#4A6280',textDecoration:'none',transition:'color 0.2s'}}
                onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#4A6280'}>{l}</a>
            ))}
          </div>
          <a href="#waitlist" style={{
            fontSize:'0.85rem',fontWeight:600,color:'#0CC0B0',
            border:'1px solid rgba(12,192,176,0.3)',padding:'0.45rem 1.1rem',
            borderRadius:'8px',textDecoration:'none',transition:'all 0.2s',whiteSpace:'nowrap',
          }}>Join Waitlist</a>
        </div>
      </nav>

      <main style={{background:'#05090F',minHeight:'100vh',paddingTop:'68px'}}>

        {/* HERO */}
        <section style={{
          minHeight:'92vh',display:'flex',alignItems:'center',
          position:'relative',overflow:'hidden',padding:'4rem 2rem',
        }}>
          <div style={{position:'absolute',top:'-100px',left:'-150px',width:'600px',height:'600px',background:'#0CC0B0',borderRadius:'50%',filter:'blur(120px)',opacity:0.07,pointerEvents:'none'}} />
          <div style={{position:'absolute',top:'5%',right:'-100px',width:'500px',height:'500px',background:'#3B6FE8',borderRadius:'50%',filter:'blur(120px)',opacity:0.07,pointerEvents:'none'}} />
          <div style={{
            position:'absolute',inset:0,
            backgroundImage:'linear-gradient(rgba(12,192,176,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(12,192,176,0.025) 1px,transparent 1px)',
            backgroundSize:'60px 60px',pointerEvents:'none',
          }} />
          <div className='hero-grid' style={{maxWidth:'1120px',margin:'0 auto',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center',position:'relative',zIndex:1}}>
            <div>
              <div style={{
                display:'inline-block',fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.09em',textTransform:'uppercase',
                color:'#0CC0B0',background:'rgba(12,192,176,0.1)',border:'1px solid rgba(12,192,176,0.2)',
                padding:'0.3rem 0.9rem',borderRadius:'100px',marginBottom:'1.75rem',
              }}>Early Access Open</div>
              <h1 style={{fontFamily:'Sora,sans-serif',fontSize:'clamp(2.8rem,5vw,4.5rem)',fontWeight:800,color:'#fff',letterSpacing:'-0.03em',lineHeight:1.08,marginBottom:'1.25rem'}}>
                Know every watt.<br />
                <span style={{color:'#0CC0B0'}}>Save every dollar.</span>
              </h1>
              <p style={{fontSize:'1.05rem',color:'#4A6280',maxWidth:'480px',marginBottom:'2.5rem',lineHeight:1.75}}>
                Ankergy ships smart plugs and a thermostat to your home — the app optimizes everything automatically. Pay <strong style={{color:'#fff'}}>$0 upfront.</strong> Pay monthly from what you save.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'2rem',marginBottom:'2.5rem',flexWrap:'wrap'}}>
                {[['$61+','avg monthly savings'],['2 mo','avg payback'],['$0','upfront cost']].map(([n,l],i) => (
                  <div key={i} style={{display:'flex',flexDirection:'column',gap:'0.15rem'}}>
                    <span style={{fontFamily:'Sora,sans-serif',fontSize:'2rem',fontWeight:800,color:'#fff',letterSpacing:'-0.02em',lineHeight:1}}>{n}</span>
                    <span style={{fontSize:'0.7rem',color:'#4A6280',textTransform:'uppercase',letterSpacing:'0.07em'}}>{l}</span>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:'0.85rem',flexWrap:'wrap'}}>
                <a href="#waitlist" style={{
                  background:'#0CC0B0',color:'#05090F',fontWeight:700,fontSize:'0.95rem',
                  padding:'0.85rem 1.8rem',borderRadius:'12px',textDecoration:'none',transition:'all 0.2s',
                }}>Get Early Access →</a>
                <a href="#how-it-works" style={{
                  background:'transparent',color:'#C8D8E8',fontWeight:600,fontSize:'0.95rem',
                  padding:'0.85rem 1.8rem',borderRadius:'12px',textDecoration:'none',
                  border:'1px solid rgba(255,255,255,0.08)',transition:'all 0.2s',
                }}>See how it works</a>
              </div>
            </div>

            {/* iPhone Dashboard */}
            <div className='hero-phone' style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'16px'}}>
              <img src="/ankergy-logo.png" alt="Ankergy" style={{height:'36px',width:'auto'}} />
              <div style={{
                width:'272px',
                background:'#080E1C',
                borderRadius:'50px',
                border:'8px solid #1A2235',
                boxShadow:'0 0 0 1.5px #2A3450, 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(12,192,176,0.1)',
                overflow:'hidden',
                position:'relative',
              }}>
                {/* Notch */}
                <div style={{width:'100px',height:'26px',background:'#080E1C',borderRadius:'0 0 18px 18px',margin:'0 auto',position:'relative',zIndex:10}} />
                {/* Status bar */}
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'2px 18px 8px',fontSize:'10px',fontWeight:600,color:'#fff'}}>
                  <span>10:26</span>
                  <div style={{display:'flex',gap:'4px',alignItems:'center'}}>
                    <span style={{fontSize:'8px'}}>▲▲▲</span>
                    <span style={{fontSize:'8px'}}>WiFi</span>
                    <span style={{fontSize:'9px',border:'1px solid rgba(255,255,255,0.4)',borderRadius:'3px',padding:'0 3px'}}>97</span>
                  </div>
                </div>
                {/* Screen content */}
                <div style={{padding:'0 16px 20px'}}>
                  {/* Header */}
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'14px'}}>
                    <div>
                      <div style={{fontSize:'17px',fontWeight:700,color:'#fff',fontFamily:'Sora,sans-serif'}}>Good morning ⚡</div>
                      <div style={{fontSize:'9px',color:'#3B8FFF',marginTop:'1px'}}>Day 5 of your billing cycle</div>
                      <div style={{fontSize:'8px',color:'#4A6280'}}>20148 · Live tracking</div>
                    </div>
                    <div style={{width:'28px',height:'28px',borderRadius:'50%',background:'#0D1829',border:'1px solid rgba(255,255,255,0.08)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px'}}>👤</div>
                  </div>

                  {/* Two stat cards */}
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'10px'}}>
                    <div style={{background:'#0D1829',borderRadius:'14px',padding:'10px',border:'1px solid rgba(255,255,255,0.06)'}}>
                      <div style={{fontSize:'7px',fontWeight:700,letterSpacing:'0.08em',color:'#4ADE80',textTransform:'uppercase',marginBottom:'6px'}}>Daily Savings</div>
                      <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'rgba(74,222,128,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',marginBottom:'5px'}}>🌿</div>
                      <div style={{fontSize:'18px',fontWeight:800,color:'#4ADE80',fontFamily:'Sora,sans-serif',lineHeight:1}}>$1.76</div>
                      <div style={{fontSize:'7px',color:'#4A6280',marginTop:'2px'}}>est. saved today</div>
                    </div>
                    <div style={{background:'#0D1829',borderRadius:'14px',padding:'10px',border:'1px solid rgba(255,255,255,0.06)'}}>
                      <div style={{fontSize:'7px',fontWeight:700,letterSpacing:'0.08em',color:'#3B8FFF',textTransform:'uppercase',marginBottom:'6px'}}>Today</div>
                      <div style={{fontSize:'18px',fontWeight:800,color:'#fff',fontFamily:'Sora,sans-serif',lineHeight:1,marginTop:'8px'}}>$18.27</div>
                      <div style={{fontSize:'7px',color:'#4A6280',marginTop:'2px'}}>cost so far</div>
                      <div style={{background:'#0A1628',borderRadius:'6px',padding:'3px 6px',marginTop:'5px',display:'inline-flex',alignItems:'center',gap:'3px'}}>
                        <span style={{fontSize:'7px',color:'#3B8FFF'}}>⚡</span>
                        <span style={{fontSize:'7px',color:'#3B8FFF',fontWeight:600}}>9.53 kW</span>
                      </div>
                    </div>
                  </div>

                  {/* Time tabs */}
                  <div style={{display:'flex',gap:'4px',marginBottom:'10px',background:'#0D1829',borderRadius:'10px',padding:'3px'}}>
                    {['Day','Week','Month','Year'].map((t,i) => (
                      <div key={i} style={{flex:1,padding:'4px 0',borderRadius:'8px',background:i===0?'#3B6FE8':'transparent',textAlign:'center',fontSize:'8px',fontWeight:600,color:i===0?'#fff':'#4A6280'}}>{t}</div>
                    ))}
                  </div>

                  {/* Cost breakdown */}
                  <div style={{background:'#0D1829',borderRadius:'14px',padding:'10px',marginBottom:'10px',border:'1px solid rgba(255,255,255,0.06)'}}>
                    <div style={{fontSize:'8px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Cost Breakdown — Day</div>
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                      {/* Donut */}
                      <div style={{position:'relative',width:'52px',height:'52px',flexShrink:0}}>
                        <svg width="52" height="52" viewBox="0 0 52 52">
                          <circle cx="26" cy="26" r="20" fill="none" stroke="#1A2A40" strokeWidth="8"/>
                          <circle cx="26" cy="26" r="20" fill="none" stroke="#3B6FE8" strokeWidth="8"
                            strokeDasharray="119 6" strokeDashoffset="31" strokeLinecap="round"/>
                          <circle cx="26" cy="26" r="20" fill="none" stroke="#4ADE80" strokeWidth="8"
                            strokeDasharray="4 121" strokeDashoffset="-88" strokeLinecap="round"/>
                        </svg>
                        <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                          <div style={{fontSize:'8px',fontWeight:800,color:'#fff',lineHeight:1}}>$18.27</div>
                          <div style={{fontSize:'5px',color:'#4A6280'}}>today</div>
                        </div>
                      </div>
                      {/* Legend */}
                      <div style={{flex:1,display:'flex',flexDirection:'column',gap:'4px'}}>
                        {[['#3B6FE8','Central A/C','96%','$17.52'],['#4ADE80','Refrigerator','3%','$0.47'],['#0CC0B0','TV','1%','$0.27']].map(([col,name,pct,val],i) => (
                          <div key={i} style={{display:'flex',alignItems:'center',gap:'4px'}}>
                            <div style={{width:'6px',height:'6px',borderRadius:'50%',background:col,flexShrink:0}} />
                            <span style={{fontSize:'7px',color:'#7A9DB8',flex:1}}>{name}</span>
                            <span style={{fontSize:'7px',color:'#4A6280'}}>{pct}</span>
                            <span style={{fontSize:'7px',fontWeight:700,color:'#4ADE80',marginLeft:'4px'}}>{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tip card */}
                  <div style={{background:'#0D1829',borderRadius:'14px',padding:'10px',border:'1px solid rgba(244,162,97,0.15)'}}>
                    <div style={{fontSize:'7px',fontWeight:700,letterSpacing:'0.08em',color:'#F4A261',textTransform:'uppercase',marginBottom:'4px'}}>💡 Tip for you</div>
                    <div style={{fontSize:'9px',fontWeight:700,color:'#fff',marginBottom:'3px'}}>Raise your thermostat 2°F</div>
                    <div style={{fontSize:'7px',color:'#4A6280',lineHeight:1.4}}>Your A/C is your top consumer. Saves <span style={{color:'#4ADE80',fontWeight:700}}>~$79/mo</span>.</div>
                  </div>

                  {/* Navbar */}
                  <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',paddingTop:'12px',marginTop:'8px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                    {[['⚡','Home',true],['🏠','Rooms',false],['💰','Savings',false],['📱','Devices',false],['💡','Tips',false]].map(([ico,lbl,active],i) => (
                      <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2px'}}>
                        <span style={{fontSize:'12px'}}>{ico}</span>
                        <span style={{fontSize:'6px',fontWeight:active?700:400,color:active?'#3B6FE8':'#4A6280'}}>{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div style={{overflow:'hidden',borderTop:'1px solid rgba(255,255,255,0.05)',borderBottom:'1px solid rgba(255,255,255,0.05)',padding:'1rem 0',background:'rgba(12,192,176,0.02)'}}>
          <div style={{display:'flex',gap:0,whiteSpace:'nowrap',animation:'marquee 30s linear infinite'}}>
            {['$0 Upfront','Pay As You Save','Smart Scheduling','22% Bill Reduction','10 Smart Plugs','1 Thermostat','Real-Time Monitoring','Off-Peak Automation','$0 Upfront','Pay As You Save','Smart Scheduling','22% Bill Reduction','10 Smart Plugs','1 Thermostat','Real-Time Monitoring','Off-Peak Automation'].map((t,i) => (
              <span key={i} style={{fontSize:'0.78rem',fontWeight:600,color:'#4A6280',padding:'0 1.5rem',letterSpacing:'0.05em',textTransform:'uppercase'}}>
                {t} <span style={{color:'#0CC0B0',marginLeft:'1.5rem'}}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{padding:'7rem 2rem'}}>
          <div style={{maxWidth:'1120px',margin:'0 auto'}}>
            <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#0CC0B0',marginBottom:'0.75rem'}}>How it works</p>
            <h2 style={{fontFamily:'Sora,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',letterSpacing:'-0.025em',lineHeight:1.12,marginBottom:'4rem'}}>Three steps to a lower bill</h2>
            <div>
              {[
                {tag:'Step 1',ico:'📦',title:'Get the hardware free',body:'We ship 10 smart plugs (SP-1) and a thermostat (T-1) directly to your door. You pay nothing upfront — no credit card required.'},
                {tag:'Step 2',ico:'📱',title:'App optimizes your usage',body:'Ankergy learns your home\'s patterns and automatically shifts high-draw devices to off-peak rate windows, cutting your bill passively.'},
                {tag:'Step 3',ico:'💸',title:'Pay from your savings',body:'Monthly payments are drawn directly from what you saved on your bill. No savings? No charge. It\'s that simple.'},
              ].map((s,i) => (
                <div key={i} style={{
                  display:'grid',gridTemplateColumns:'1fr auto',gap:'4rem',alignItems:'center',
                  padding:'3rem 0 3rem 2rem',
                  borderBottom:'1px solid rgba(255,255,255,0.05)',
                  borderLeft:'2px solid transparent',
                  transition:'border-color 0.2s',
                  cursor:'default',
                }}
                  onMouseOver={e=>e.currentTarget.style.borderLeftColor='#0CC0B0'}
                  onMouseOut={e=>e.currentTarget.style.borderLeftColor='transparent'}
                >
                  <div>
                    <span style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#0CC0B0',display:'block',marginBottom:'0.75rem'}}>{s.tag}</span>
                    <h3 style={{fontFamily:'Sora,sans-serif',fontSize:'1.75rem',fontWeight:800,color:'#fff',letterSpacing:'-0.02em',marginBottom:'0.75rem',lineHeight:1.2}}>{s.title}</h3>
                    <p style={{fontSize:'0.95rem',color:'#4A6280',lineHeight:1.7,maxWidth:'520px'}}>{s.body}</p>
                  </div>
                  <div style={{
                    width:'72px',height:'72px',borderRadius:'18px',
                    background:'#0C1524',border:'1px solid rgba(12,192,176,0.12)',
                    display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem',
                    flexShrink:0,
                  }}>{s.ico}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" style={{padding:'7rem 2rem',background:'#080E1A'}}>
          <div style={{maxWidth:'1120px',margin:'0 auto'}}>
            <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#0CC0B0',marginBottom:'0.75rem'}}>The Ankergy Bundle</p>
            <h2 style={{fontFamily:'Sora,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',letterSpacing:'-0.025em',lineHeight:1.12,marginBottom:'5rem'}}>Hardware that pays for itself</h2>

            {/* Smart Plug */}
            <div className='products-grid' style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center',marginBottom:'6rem'}}>
              <div style={{borderRadius:'24px',overflow:'hidden',background:'#F0F0F0',aspectRatio:'1',display:'flex',alignItems:'center',justifyContent:'center',padding:'3rem'}}>
                <img src="/smart-plug.png" alt="Ankergy Smart Plug SP-1" style={{width:'100%',height:'100%',objectFit:'contain'}} />
              </div>
              <div>
                <div style={{display:'inline-block',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.07em',textTransform:'uppercase',color:'#0CC0B0',background:'rgba(12,192,176,0.1)',border:'1px solid rgba(12,192,176,0.2)',padding:'0.25rem 0.75rem',borderRadius:'100px',marginBottom:'1rem'}}>SP-1 · 10 units</div>
                <h3 style={{fontFamily:'Sora,sans-serif',fontSize:'2.5rem',fontWeight:800,color:'#fff',letterSpacing:'-0.02em',lineHeight:1.1,marginBottom:'1rem'}}>Smart Plug</h3>
                <p style={{fontSize:'1rem',color:'#4A6280',lineHeight:1.7,marginBottom:'1.5rem'}}>Wi-Fi enabled plugs that track usage and let the app schedule your devices intelligently. Works with any standard outlet.</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'0.6rem',marginBottom:'2rem',padding:0}}>
                  {['Real-time energy monitoring','Remote on/off control','Schedule automation','Works with Alexa & Google Home'].map((f,i) => (
                    <li key={i} style={{fontSize:'0.9rem',color:'#7A9DB8',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                      <span style={{color:'#0CC0B0',fontWeight:700,fontSize:'0.8rem'}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <div style={{fontFamily:'Sora,sans-serif',fontSize:'2.8rem',fontWeight:800,color:'#0CC0B0'}}>
                  $4 <span style={{fontSize:'1rem',fontWeight:400,color:'#4A6280',fontFamily:'Inter,sans-serif'}}>/ unit</span>
                </div>
              </div>
            </div>

            {/* Thermostat */}
            <div className='products-grid' style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}}>
              <div>
                <div style={{display:'inline-block',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.07em',textTransform:'uppercase',color:'#F4A261',background:'rgba(244,162,97,0.1)',border:'1px solid rgba(244,162,97,0.2)',padding:'0.25rem 0.75rem',borderRadius:'100px',marginBottom:'1rem'}}>T-1 · 1 unit</div>
                <h3 style={{fontFamily:'Sora,sans-serif',fontSize:'2.5rem',fontWeight:800,color:'#fff',letterSpacing:'-0.02em',lineHeight:1.1,marginBottom:'1rem'}}>Smart Thermostat</h3>
                <p style={{fontSize:'1rem',color:'#4A6280',lineHeight:1.7,marginBottom:'1.5rem'}}>The single biggest lever on your energy bill. The T-1 learns your schedule and adjusts automatically to cut HVAC costs.</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'0.6rem',marginBottom:'2rem',padding:0}}>
                  {['AI-powered scheduling','Geo-fencing away mode','Humidity & air quality sensors','Works with all HVAC systems'].map((f,i) => (
                    <li key={i} style={{fontSize:'0.9rem',color:'#7A9DB8',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                      <span style={{color:'#F4A261',fontWeight:700,fontSize:'0.8rem'}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <div style={{fontFamily:'Sora,sans-serif',fontSize:'2.8rem',fontWeight:800,color:'#F4A261'}}>
                  $70 <span style={{fontSize:'1rem',fontWeight:400,color:'#4A6280',fontFamily:'Inter,sans-serif'}}>/ unit</span>
                </div>
              </div>
              <div style={{borderRadius:'24px',overflow:'hidden',background:'#E8EDE8',aspectRatio:'1.5',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src="/thermostat.webp" alt="Ankergy Smart Thermostat T-1" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              </div>
            </div>
          </div>
        </section>

        {/* SAVINGS */}
        <section id="savings" style={{padding:'7rem 2rem'}}>
          <div className='savings-grid' style={{maxWidth:'1120px',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6rem',alignItems:'center'}}>
            <div>
              <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#0CC0B0',marginBottom:'0.75rem'}}>Savings calculator</p>
              <h2 style={{fontFamily:'Sora,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',letterSpacing:'-0.025em',lineHeight:1.12,marginBottom:'1rem'}}>What could you save?</h2>
              <p style={{color:'#4A6280',fontSize:'0.95rem',lineHeight:1.7,marginBottom:'2rem'}}>Ankergy users cut their electricity bill by an average of 22% in the first month.</p>
              <div style={{fontFamily:'Sora,sans-serif',fontSize:'4rem',fontWeight:800,color:'#0CC0B0',letterSpacing:'-0.03em',lineHeight:1,marginBottom:'0.25rem'}}>
                ${savings}<span style={{fontSize:'1.5rem',color:'#4A6280',fontFamily:'Inter,sans-serif',fontWeight:400}}>/mo</span>
              </div>
              <p style={{fontSize:'0.72rem',color:'#4A6280',textTransform:'uppercase',letterSpacing:'0.07em',marginBottom:'2rem'}}>estimated monthly savings</p>
              <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.9rem',color:'#4A6280'}}>
                  <span>Annual savings</span><strong style={{color:'#fff'}}>${annual}</strong>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.9rem',color:'#4A6280'}}>
                  <span>Payback period</span><strong style={{color:'#4ADE80'}}>{payback} months</strong>
                </div>
              </div>
            </div>
            <div style={{background:'#0C1524',border:'1px solid rgba(12,192,176,0.12)',borderRadius:'24px',padding:'2.5rem'}}>
              <p style={{fontSize:'0.75rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'#4A6280',marginBottom:'0.5rem'}}>Your monthly bill</p>
              <div style={{fontFamily:'Sora,sans-serif',fontSize:'3rem',fontWeight:800,color:'#fff',letterSpacing:'-0.02em',marginBottom:'1.5rem'}}>${bill}</div>
              <input type="range" min="80" max="500" step="10" value={bill} onChange={e=>setBill(Number(e.target.value))}
                style={{width:'100%',marginBottom:'0.5rem',accentColor:'#0CC0B0',cursor:'pointer'}} />
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.75rem',color:'#4A6280',marginBottom:'1.75rem'}}>
                <span>$80</span><span>$500</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.9rem',color:'#4A6280'}}>
                  <span>Monthly savings (22%)</span><span style={{color:'#4ADE80',fontWeight:700}}>${savings}</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.9rem',color:'#4A6280'}}>
                  <span>Annual savings</span><span style={{color:'#4ADE80',fontWeight:700}}>${annual}</span>
                </div>
                <div style={{height:'1px',background:'rgba(12,192,176,0.1)',margin:'0.25rem 0'}} />
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.9rem'}}>
                  <span style={{fontWeight:600,color:'#fff'}}>Pays for itself in</span>
                  <span style={{color:'#4ADE80',fontWeight:700,fontSize:'1rem'}}>{payback} months</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" style={{padding:'7rem 2rem',background:'#080E1A'}}>
          <div style={{maxWidth:'1120px',margin:'0 auto'}}>
            <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#0CC0B0',marginBottom:'0.75rem'}}>The team</p>
            <h2 style={{fontFamily:'Sora,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',letterSpacing:'-0.025em',lineHeight:1.12,marginBottom:'4rem'}}>Built by people who care about energy</h2>
            <div className='team-grid' style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.5rem'}}>
              {team.map((m,i) => (
                <div key={i} style={{
                  background:'#0C1524',border:'1px solid rgba(12,192,176,0.12)',
                  borderRadius:'20px',padding:'2.5rem 1.5rem',textAlign:'center',
                  transition:'all 0.2s',cursor:'default',
                }}
                  onMouseOver={e=>{e.currentTarget.style.borderColor='rgba(12,192,176,0.3)';e.currentTarget.style.transform='translateY(-4px)'}}
                  onMouseOut={e=>{e.currentTarget.style.borderColor='rgba(12,192,176,0.12)';e.currentTarget.style.transform='translateY(0)'}}
                >
                  <div style={{
                    width:'64px',height:'64px',borderRadius:'50%',
                    background:'linear-gradient(135deg,#0CC0B0,#3B6FE8)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontFamily:'Sora,sans-serif',fontSize:'1.1rem',fontWeight:800,color:'#fff',
                    margin:'0 auto 1.25rem',
                  }}>{m.init}</div>
                  <div style={{fontFamily:'Sora,sans-serif',fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:'0.4rem'}}>{m.name}</div>
                  <div style={{fontSize:'0.82rem',color:'#4A6280'}}>{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" style={{padding:'9rem 2rem',textAlign:'center',position:'relative',overflow:'hidden',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
          <div style={{position:'absolute',bottom:'-200px',left:'50%',transform:'translateX(-50%)',width:'800px',height:'600px',background:'radial-gradient(circle,rgba(12,192,176,0.06) 0%,transparent 70%)',pointerEvents:'none'}} />
          <div style={{maxWidth:'560px',margin:'0 auto',position:'relative',zIndex:1}}>
            <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#0CC0B0',marginBottom:'0.75rem'}}>Limited early access</p>
            <h2 style={{fontFamily:'Sora,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,color:'#fff',letterSpacing:'-0.03em',lineHeight:1.08,marginBottom:'1rem'}}>Be the first to save.</h2>
            <p style={{color:'#4A6280',fontSize:'1rem',marginBottom:'2.5rem',lineHeight:1.7}}>Rolling out to a limited number of homes first. Drop your email and we will reach out when your spot is ready.</p>
            {submitted ? (
              <div style={{background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.2)',color:'#4ADE80',padding:'1rem 1.5rem',borderRadius:'12px',fontWeight:600,marginBottom:'1rem'}}>
                You are on the list — we will be in touch soon.
              </div>
            ) : (
              <form className='waitlist-form' style={{display:'flex',gap:'0.75rem',marginBottom:'1rem'}} onSubmit={e=>{e.preventDefault();if(email)setSubmitted(true)}}>
                <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} required
                  style={{flex:1,background:'#0C1524',border:'1px solid rgba(12,192,176,0.2)',borderRadius:'12px',padding:'0.875rem 1.25rem',fontSize:'1rem',color:'#fff',fontFamily:'Inter,sans-serif',outline:'none'}} />
                <button type="submit" style={{background:'#0CC0B0',color:'#05090F',fontWeight:700,fontSize:'0.95rem',padding:'0.875rem 1.75rem',borderRadius:'12px',border:'none',cursor:'pointer',whiteSpace:'nowrap',fontFamily:'Inter,sans-serif'}}>
                  Join Waitlist →
                </button>
              </form>
            )}
            <p style={{fontSize:'0.78rem',color:'#4A6280'}}>No spam. No commitments. Cancel anytime.</p>
          </div>
        </section>

      </main>

      <footer style={{borderTop:'1px solid rgba(255,255,255,0.05)',padding:'3rem 2rem',background:'#05090F'}}>
        <div style={{maxWidth:'1120px',margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.5rem',textAlign:'center'}}>
          <img src="/ankergy-logo.png" alt="Ankergy" style={{height:'28px',width:'auto',marginBottom:'0.5rem'}} />
          <p style={{fontSize:'0.875rem',color:'#4A6280'}}>Smart energy for every home.</p>
          <a href="mailto:ankergyofficial@gmail.com" style={{fontSize:'0.85rem',color:'#0CC0B0',textDecoration:'none'}}>ankergyofficial@gmail.com</a>
          <p style={{fontSize:'0.75rem',color:'#4A6280',opacity:0.5}}>© 2026 Ankergy. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #05090F; }
        a { color: inherit; }
        img { display: block; max-width: 100%; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-phone { display: none !important; }
          .hero-title { font-size: 2.8rem !important; }
          .products-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .savings-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .waitlist-form { flex-direction: column !important; }
          .hero-stats { gap: 1.5rem !important; }
          .section-pad { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </>
  )
}
