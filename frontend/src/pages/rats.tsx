
export default function Rats() {
  return (
    <>
      <h1>Sansha Rats</h1>
      <h2>Battleship</h2>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Citizen Astur <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 360 GJ | Range: 12,000 m | Duration: 12 s" /><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 20,000 m | Strength: 1 | Duration: 5 s" /><img src="https://images.evetech.net/types/12709/icon?size=32" className="small-icon" alt="Target Painter" title="Target Painter | Range: 45,000 m | Duration: 10 s | FallOff: 90,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Citizen Astur" title="Citizen Astur" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 4,500</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">2250 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">2250 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 818</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">409 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">409 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">41,800</span> <span title="EHP" className="badge bg-warning hidden-xs">130,625</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">20,900</span> <span title="EHP" className="badge bg-warning hidden-xs">38,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">10,450</span> <span title="EHP" className="badge bg-warning hidden-xs">10,450</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">73,150</span> <span title="EHP" className="badge bg-warning hidden-xs">179,075</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 35,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 118 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 850 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 540 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 105 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Deltole Tegmentum <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 360 GJ | Range: 12,000 m | Duration: 12 s" /><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 20,000 m | Strength: 1 | Duration: 5 s" /><img src="https://images.evetech.net/types/12709/icon?size=32" className="small-icon" alt="Target Painter" title="Target Painter | Range: 45,000 m | Duration: 10 s | FallOff: 90,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Deltole Tegmentum" title="Deltole Tegmentum" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 4,500</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">2250 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">2250 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 818</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">409 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">409 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">41,800</span> <span title="EHP" className="badge bg-warning hidden-xs">130,625</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">20,900</span> <span title="EHP" className="badge bg-warning hidden-xs">38,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">10,450</span> <span title="EHP" className="badge bg-warning hidden-xs">10,450</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">73,150</span> <span title="EHP" className="badge bg-warning hidden-xs">179,075</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 35,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 118 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 850 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 540 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 105 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Intaki Colliculus <span className="badge"><img src="https://images.evetech.net/types/3586/icon?size=32" className="small-icon" alt="Remote Shield" title="Remote Shield | Duration: 5 s | Amount: 380 hp | Range: 25,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Intaki Colliculus" title="Intaki Colliculus" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2165/icon?size=32" className="small-icon" /> 2,256</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1128 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1128 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2165/icon?size=32" className="small-icon" /> 282</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">141 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">141 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">79,200</span> <span title="EHP" className="badge bg-warning hidden-xs">232,941</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">66%</div>
                    <div className="resi-inner" style={{width: '66%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">66%</div>
                    <div className="resi-inner" style={{width: '66%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">66%</div>
                    <div className="resi-inner" style={{width: '66%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">66%</div>
                    <div className="resi-inner" style={{width: '66%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">39,600</span> <span title="EHP" className="badge bg-warning hidden-xs">62,857</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">19,800</span> <span title="EHP" className="badge bg-warning hidden-xs">19,800</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">138,600</span> <span title="EHP" className="badge bg-warning hidden-xs">315,598</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 170,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 50,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 140 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 980 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 320 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 140 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Ostingele Tectum <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Ostingele Tectum" title="Ostingele Tectum" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/464/icon?size=32" className="small-icon" /> 2,640</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1320 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1320 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/464/icon?size=32" className="small-icon" /> 528</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">264 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">264 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">60,000</span> <span title="EHP" className="badge bg-warning hidden-xs">222,222</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">73%</div>
                    <div className="resi-inner" style={{width: '73%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">73%</div>
                    <div className="resi-inner" style={{width: '73%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">73%</div>
                    <div className="resi-inner" style={{width: '73%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">73%</div>
                    <div className="resi-inner" style={{width: '73%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">30,000</span> <span title="EHP" className="badge bg-warning hidden-xs">52,632</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">15,000</span> <span title="EHP" className="badge bg-warning hidden-xs">15,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">105,000</span> <span title="EHP" className="badge bg-warning hidden-xs">289,854</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 65,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 40,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 118 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 850 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 530 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 125 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Outuni Mesen <span className="badge"><img src="https://images.evetech.net/types/526/icon?size=32" className="small-icon" alt="Stasis Webifier" title="Stasis Webifier | Factor: -60 % | Duration: 5 s | Range: 20,000 m" /><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 3,000 GJ | Range: 25,000 m | Duration: 24 s" /><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 24,000 m | Strength: 1 | Duration: 5 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Outuni Mesen" title="Outuni Mesen" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/464/icon?size=32" className="small-icon" /> 1,760</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1440 hp</div>
                    <div className="resi-inner" style={{width: '81.818181818182%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">320 hp</div>
                    <div className="resi-inner" style={{width: '18.181818181818%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/464/icon?size=32" className="small-icon" /> 352</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">288 hp</div>
                    <div className="resi-inner" style={{width: '81.818181818182%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">64 hp</div>
                    <div className="resi-inner" style={{width: '18.181818181818%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">52,800</span> <span title="EHP" className="badge bg-warning hidden-xs">160,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">26,400</span> <span title="EHP" className="badge bg-warning hidden-xs">41,905</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">13,200</span> <span title="EHP" className="badge bg-warning hidden-xs">13,200</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">92,400</span> <span title="EHP" className="badge bg-warning hidden-xs">215,105</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 65,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 18,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 110 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 790 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 400 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 125 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Slave 32152 <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 360 GJ | Range: 12,000 m | Duration: 12 s" /><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 20,000 m | Strength: 1 | Duration: 5 s" /><img src="https://images.evetech.net/types/12709/icon?size=32" className="small-icon" alt="Target Painter" title="Target Painter | Range: 45,000 m | Duration: 10 s | FallOff: 90,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Slave 32152" title="Slave 32152" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 4,500</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">2250 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">2250 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 818</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">409 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">409 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">41,800</span> <span title="EHP" className="badge bg-warning hidden-xs">130,625</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">68%</div>
                    <div className="resi-inner" style={{width: '68%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">20,900</span> <span title="EHP" className="badge bg-warning hidden-xs">38,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">10,450</span> <span title="EHP" className="badge bg-warning hidden-xs">10,450</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">73,150</span> <span title="EHP" className="badge bg-warning hidden-xs">179,075</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 35,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 118 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 850 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 540 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 105 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Yulai Crus Cerebi <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/2295.jpg" className="img-thumbnail render-icon" alt="Yulai Crus Cerebi" title="Yulai Crus Cerebi" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/464/icon?size=32" className="small-icon" /> 1,984</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1240 hp</div>
                    <div className="resi-inner" style={{width: '62.5%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">744 hp</div>
                    <div className="resi-inner" style={{width: '37.5%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/464/icon?size=32" className="small-icon" /> 397</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">248 hp</div>
                    <div className="resi-inner" style={{width: '62.5%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">149 hp</div>
                    <div className="resi-inner" style={{width: '37.5%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">33,000</span> <span title="EHP" className="badge bg-warning hidden-xs">86,842</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">16,500</span> <span title="EHP" className="badge bg-warning hidden-xs">22,759</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">28%</div>
                    <div className="resi-inner" style={{width: '28%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">28%</div>
                    <div className="resi-inner" style={{width: '28%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">28%</div>
                    <div className="resi-inner" style={{width: '28%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">28%</div>
                    <div className="resi-inner" style={{width: '28%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">8,250</span> <span title="EHP" className="badge bg-warning hidden-xs">8,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">57,750</span> <span title="EHP" className="badge bg-warning hidden-xs">117,851</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 210,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 60,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 118 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 800 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 400 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 200 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2>Cruiser</h2>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Antem Neo <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Antem Neo" title="Antem Neo" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 840</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">240 hp</div>
                    <div className="resi-inner" style={{width: '28.571428571429%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">600 hp</div>
                    <div className="resi-inner" style={{width: '71.428571428571%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 168</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">48 hp</div>
                    <div className="resi-inner" style={{width: '28.571428571429%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">120 hp</div>
                    <div className="resi-inner" style={{width: '71.428571428571%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">15,000</span> <span title="EHP" className="badge bg-warning hidden-xs">65,217</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">77%</div>
                    <div className="resi-inner" style={{width: '77%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">77%</div>
                    <div className="resi-inner" style={{width: '77%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">77%</div>
                    <div className="resi-inner" style={{width: '77%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">77%</div>
                    <div className="resi-inner" style={{width: '77%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">7,500</span> <span title="EHP" className="badge bg-warning hidden-xs">18,750</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">3,750</span> <span title="EHP" className="badge bg-warning hidden-xs">3,750</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">26,250</span> <span title="EHP" className="badge bg-warning hidden-xs">87,717</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 176,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 60,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 205 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,350 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 184 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 770 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Arnon Epithalamus <span className="badge"><img src="https://images.evetech.net/types/1957/icon?size=32" className="small-icon" alt="Jammer" title="Jammer | Duration: 20 s | Max-Range: 32,000 m | FallOff: 36,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Arnon Epithalamus" title="Arnon Epithalamus" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2212/icon?size=32" className="small-icon" /> 900</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">450 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">450 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2212/icon?size=32" className="small-icon" /> 164</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">82 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">82 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">13,860</span> <span title="EHP" className="badge bg-warning hidden-xs">46,200</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">70%</div>
                    <div className="resi-inner" style={{width: '70%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">70%</div>
                    <div className="resi-inner" style={{width: '70%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">70%</div>
                    <div className="resi-inner" style={{width: '70%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">70%</div>
                    <div className="resi-inner" style={{width: '70%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">6,930</span> <span title="EHP" className="badge bg-warning hidden-xs">15,750</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">3,465</span> <span title="EHP" className="badge bg-warning hidden-xs">3,465</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">24,255</span> <span title="EHP" className="badge bg-warning hidden-xs">65,415</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 125,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 50,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 210 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,300 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 215 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 320 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Auga Hypophysis <span className="badge"><img src="https://images.evetech.net/types/526/icon?size=32" className="small-icon" alt="Stasis Webifier" title="Stasis Webifier | Factor: -60 % | Duration: 10 s | Range: 10,000 m" /><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 9,000 m | Strength: 2 | Duration: 5 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Auga Hypophysis" title="Auga Hypophysis" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/458/icon?size=32" className="small-icon" /> 2,400</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1200 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1200 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/458/icon?size=32" className="small-icon" /> 436</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">218 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">218 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">17,820</span> <span title="EHP" className="badge bg-warning hidden-xs">33,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">46%</div>
                    <div className="resi-inner" style={{width: '46%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">46%</div>
                    <div className="resi-inner" style={{width: '46%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">46%</div>
                    <div className="resi-inner" style={{width: '46%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">46%</div>
                    <div className="resi-inner" style={{width: '46%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">8,910</span> <span title="EHP" className="badge bg-warning hidden-xs">14,143</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">4,455</span> <span title="EHP" className="badge bg-warning hidden-xs">4,455</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">31,185</span> <span title="EHP" className="badge bg-warning hidden-xs">51,598</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 20,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 6,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 170 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,100 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 325 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 250 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Lirsautton Parichaya <span className="badge"><img src="https://images.evetech.net/types/1957/icon?size=32" className="small-icon" alt="Jammer" title="Jammer | Duration: 20 s | Max-Range: 72,000 m | FallOff: 50,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/10039.jpg" className="img-thumbnail render-icon" alt="Lirsautton Parichaya" title="Lirsautton Parichaya" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2947/icon?size=32" className="small-icon" /> 6,600</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">3300 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">3300 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2947/icon?size=32" className="small-icon" /> 440</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">220 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">220 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">6,000</span> <span title="EHP" className="badge bg-warning hidden-xs">8,571</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">20%</div>
                    <div className="resi-inner" style={{width: '20%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">40%</div>
                    <div className="resi-inner" style={{width: '40%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">5,500</span> <span title="EHP" className="badge bg-warning hidden-xs">8,462</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">25%</div>
                    <div className="resi-inner" style={{width: '25%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">20%</div>
                    <div className="resi-inner" style={{width: '20%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">8,000</span> <span title="EHP" className="badge bg-warning hidden-xs">8,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">19,500</span> <span title="EHP" className="badge bg-warning hidden-xs">25,033</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 10,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 7,500 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 158 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,400 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 125 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 200 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Mara Paleo <span className="badge"><img src="https://images.evetech.net/types/3586/icon?size=32" className="small-icon" alt="Remote Shield" title="Remote Shield | Duration: 5 s | Amount: 700 hp | Range: 70,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Mara Paleo" title="Mara Paleo" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">4,620</span> <span title="EHP" className="badge bg-warning hidden-xs">23,100</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">2,310</span> <span title="EHP" className="badge bg-warning hidden-xs">5,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,155</span> <span title="EHP" className="badge bg-warning hidden-xs">1,155</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">8,085</span> <span title="EHP" className="badge bg-warning hidden-xs">29,505</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 0 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 60,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 310 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,050 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 65 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 500 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Raa Thalamus <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Raa Thalamus" title="Raa Thalamus" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 400</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">200 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">200 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 80</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">40 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">40 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">9,000</span> <span title="EHP" className="badge bg-warning hidden-xs">29,032</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">4,500</span> <span title="EHP" className="badge bg-warning hidden-xs">6,716</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">2,250</span> <span title="EHP" className="badge bg-warning hidden-xs">2,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">15,750</span> <span title="EHP" className="badge bg-warning hidden-xs">37,999</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 33,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 18,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 205 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,520 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 200 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 340 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Romi Thalamus <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Romi Thalamus" title="Romi Thalamus" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 1,600</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">800 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">800 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 320</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">160 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">160 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">25,000</span> <span title="EHP" className="badge bg-warning hidden-xs">80,645</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">69%</div>
                    <div className="resi-inner" style={{width: '69%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">12,500</span> <span title="EHP" className="badge bg-warning hidden-xs">18,657</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">33%</div>
                    <div className="resi-inner" style={{width: '33%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">6,250</span> <span title="EHP" className="badge bg-warning hidden-xs">6,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">43,750</span> <span title="EHP" className="badge bg-warning hidden-xs">105,552</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 33,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 18,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 205 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,520 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 200 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 340 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Uitra Telen <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Uitra Telen" title="Uitra Telen" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 660</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">540 hp</div>
                    <div className="resi-inner" style={{width: '81.818181818182%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">120 hp</div>
                    <div className="resi-inner" style={{width: '18.181818181818%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/459/icon?size=32" className="small-icon" /> 120</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">98 hp</div>
                    <div className="resi-inner" style={{width: '81.818181818182%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">22 hp</div>
                    <div className="resi-inner" style={{width: '18.181818181818%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">20,680</span> <span title="EHP" className="badge bg-warning hidden-xs">103,400</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">80%</div>
                    <div className="resi-inner" style={{width: '80%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">10,340</span> <span title="EHP" className="badge bg-warning hidden-xs">23,500</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">56%</div>
                    <div className="resi-inner" style={{width: '56%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">5,170</span> <span title="EHP" className="badge bg-warning hidden-xs">5,170</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">36,190</span> <span title="EHP" className="badge bg-warning hidden-xs">132,070</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 100,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 30,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 260 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 1,500 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 300 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 490 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Vylade Dien <span className="badge"><img src="https://images.evetech.net/types/20124/icon?size=32" className="small-icon" alt="OGB" title="OGB | Bonus: -20 %" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1236.jpg" className="img-thumbnail render-icon" alt="Vylade Dien" title="Vylade Dien" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">41,800</span> <span title="EHP" className="badge bg-warning hidden-xs">220,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">81%</div>
                    <div className="resi-inner" style={{width: '81%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">81%</div>
                    <div className="resi-inner" style={{width: '81%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">81%</div>
                    <div className="resi-inner" style={{width: '81%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">81%</div>
                    <div className="resi-inner" style={{width: '81%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">20,900</span> <span title="EHP" className="badge bg-warning hidden-xs">44,468</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">53%</div>
                    <div className="resi-inner" style={{width: '53%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">53%</div>
                    <div className="resi-inner" style={{width: '53%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">53%</div>
                    <div className="resi-inner" style={{width: '53%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">53%</div>
                    <div className="resi-inner" style={{width: '53%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">10,450</span> <span title="EHP" className="badge bg-warning hidden-xs">10,450</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">73,150</span> <span title="EHP" className="badge bg-warning hidden-xs">274,918</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 0 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 60,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 170 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 170 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 422 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 240 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2>Frigate</h2>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Eystur Rhomben <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1237.jpg" className="img-thumbnail render-icon" alt="Eystur Rhomben" title="Eystur Rhomben" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 600</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">300 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">300 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 120</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">2,500</span> <span title="EHP" className="badge bg-warning hidden-xs">6,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,250</span> <span title="EHP" className="badge bg-warning hidden-xs">2,193</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">625</span> <span title="EHP" className="badge bg-warning hidden-xs">625</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">4,375</span> <span title="EHP" className="badge bg-warning hidden-xs">9,068</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 11,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 560 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 3,360 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 49 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 810 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Jel Rhomben <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1237.jpg" className="img-thumbnail render-icon" alt="Jel Rhomben" title="Jel Rhomben" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 240</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">120 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">120 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 48</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">24 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">24 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">900</span> <span title="EHP" className="badge bg-warning hidden-xs">2,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">450</span> <span title="EHP" className="badge bg-warning hidden-xs">789</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">225</span> <span title="EHP" className="badge bg-warning hidden-xs">225</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,575</span> <span title="EHP" className="badge bg-warning hidden-xs">3,264</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 11,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 560 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 3,360 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 49 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 810 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Niarja Myelen <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 450 GJ | Range: 18,000 m | Duration: 10 s" /><img src="https://images.evetech.net/types/1957/icon?size=32" className="small-icon" alt="Jammer" title="Jammer | Duration: 20 s | Max-Range: 32,000 m | FallOff: 36,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1238.jpg" className="img-thumbnail render-icon" alt="Niarja Myelen" title="Niarja Myelen" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,500</span> <span title="EHP" className="badge bg-warning hidden-xs">2,308</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">750</span> <span title="EHP" className="badge bg-warning hidden-xs">1,154</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">325</span> <span title="EHP" className="badge bg-warning hidden-xs">325</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">2,575</span> <span title="EHP" className="badge bg-warning hidden-xs">3,787</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 0 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 15,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 405 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,760 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 53 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 715 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Orkashu Myelen <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 75 GJ | Range: 5,250 m | Duration: 10 s" /><img src="https://images.evetech.net/types/1957/icon?size=32" className="small-icon" alt="Jammer" title="Jammer | Duration: 20 s | Max-Range: 32,000 m | FallOff: 36,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1238.jpg" className="img-thumbnail render-icon" alt="Orkashu Myelen" title="Orkashu Myelen" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,080</span> <span title="EHP" className="badge bg-warning hidden-xs">1,662</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">540</span> <span title="EHP" className="badge bg-warning hidden-xs">831</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">35%</div>
                    <div className="resi-inner" style={{width: '35%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">270</span> <span title="EHP" className="badge bg-warning hidden-xs">270</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,890</span> <span title="EHP" className="badge bg-warning hidden-xs">2,762</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 0 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 4,500 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 405 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,760 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 53 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 715 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Orkashu Pontine <span className="badge" /></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1237.jpg" className="img-thumbnail render-icon" alt="Orkashu Pontine" title="Orkashu Pontine" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 600</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">300 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">300 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 120</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,000</span> <span title="EHP" className="badge bg-warning hidden-xs">2,500</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">60%</div>
                    <div className="resi-inner" style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">500</span> <span title="EHP" className="badge bg-warning hidden-xs">877</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">250</span> <span title="EHP" className="badge bg-warning hidden-xs">250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,750</span> <span title="EHP" className="badge bg-warning hidden-xs">3,627</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 11,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 560 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 3,360 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 49 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 810 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Renyn Meten <span className="badge"><img src="https://images.evetech.net/types/526/icon?size=32" className="small-icon" alt="Stasis Webifier" title="Stasis Webifier | Factor: -60 % | Duration: 5 s | Range: 15,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1237.jpg" className="img-thumbnail render-icon" alt="Renyn Meten" title="Renyn Meten" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 960</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">480 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">480 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 192</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">96 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">96 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,936</span> <span title="EHP" className="badge bg-warning hidden-xs">5,867</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">968</span> <span title="EHP" className="badge bg-warning hidden-xs">2,547</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">484</span> <span title="EHP" className="badge bg-warning hidden-xs">484</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">3,388</span> <span title="EHP" className="badge bg-warning hidden-xs">8,898</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 9,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 410 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,550 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 33 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 875 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Sansha's Nation Commander <span className="badge"><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 24,000 m | Strength: 1 | Duration: 5 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1238.jpg" className="img-thumbnail render-icon" alt="Sansha's Nation Commander" title="Sansha's Nation Commander" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 11,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">5625 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">5625 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 1,250</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">625 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">625 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">3,080</span> <span title="EHP" className="badge bg-warning hidden-xs">4,889</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,540</span> <span title="EHP" className="badge bg-warning hidden-xs">2,444</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">770</span> <span title="EHP" className="badge bg-warning hidden-xs">770</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">5,390</span> <span title="EHP" className="badge bg-warning hidden-xs">8,103</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 60,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 355 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,100 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 39 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 625 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Schmaeel Medulla <span className="badge"><img src="https://images.evetech.net/types/526/icon?size=32" className="small-icon" alt="Stasis Webifier" title="Stasis Webifier | Factor: -60 % | Duration: 5 s | Range: 15,000 m" /><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 30,000 m | Strength: 1 | Duration: 5 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1237.jpg" className="img-thumbnail render-icon" alt="Schmaeel Medulla" title="Schmaeel Medulla" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 252</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">126 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">126 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 50</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">25 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">25 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">3,300</span> <span title="EHP" className="badge bg-warning hidden-xs">5,410</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">39%</div>
                    <div className="resi-inner" style={{width: '39%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">39%</div>
                    <div className="resi-inner" style={{width: '39%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">39%</div>
                    <div className="resi-inner" style={{width: '39%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">39%</div>
                    <div className="resi-inner" style={{width: '39%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,650</span> <span title="EHP" className="badge bg-warning hidden-xs">3,000</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">45%</div>
                    <div className="resi-inner" style={{width: '45%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">825</span> <span title="EHP" className="badge bg-warning hidden-xs">825</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">5,775</span> <span title="EHP" className="badge bg-warning hidden-xs">9,235</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 75,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 640 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 4,000 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 36 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 1,850 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Tama Cerebellum <span className="badge"><img src="https://images.evetech.net/types/447/icon?size=32" className="small-icon" alt="Warp Scrambler" title="Warp Scrambler | Range: 24,000 m | Strength: 1 | Duration: 5 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1238.jpg" className="img-thumbnail render-icon" alt="Tama Cerebellum" title="Tama Cerebellum" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 2,700</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1350 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">1350 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/2210/icon?size=32" className="small-icon" /> 300</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">150 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">150 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">3,080</span> <span title="EHP" className="badge bg-warning hidden-xs">4,889</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,540</span> <span title="EHP" className="badge bg-warning hidden-xs">2,444</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">37%</div>
                    <div className="resi-inner" style={{width: '37%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">770</span> <span title="EHP" className="badge bg-warning hidden-xs">770</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">5,390</span> <span title="EHP" className="badge bg-warning hidden-xs">8,103</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 60,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 12,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 355 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,100 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 39 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 625 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Youl Meten <span className="badge"><img src="https://images.evetech.net/types/526/icon?size=32" className="small-icon" alt="Stasis Webifier" title="Stasis Webifier | Factor: -50 % | Duration: 5 s | Range: 10,000 m" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/1237.jpg" className="img-thumbnail render-icon" alt="Youl Meten" title="Youl Meten" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
            <div className="col-3"><span title="Alpha"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 192</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">96 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">96 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
            <div className="col-3"><span title="DPS"><img src="https://images.evetech.net/types/454/icon?size=32" className="small-icon" /> 38</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em" title="EM"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">19 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal" title="Thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">19 hp</div>
                    <div className="resi-inner" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic" title="Kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive" title="Explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0 hp</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">700</span> <span title="EHP" className="badge bg-warning hidden-xs">2,121</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">67%</div>
                    <div className="resi-inner" style={{width: '67%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">350</span> <span title="EHP" className="badge bg-warning hidden-xs">921</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">62%</div>
                    <div className="resi-inner" style={{width: '62%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">175</span> <span title="EHP" className="badge bg-warning hidden-xs">175</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,225</span> <span title="EHP" className="badge bg-warning hidden-xs">3,217</span>
            </div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 10,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 8,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 410 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 2,550 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 33 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 875 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2>Capital</h2>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>The Kundalini Manifest <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 1,200 GJ | Range: 29,000 m | Duration: 24 s" /><img src="https://images.evetech.net/types/3586/icon?size=32" className="small-icon" alt="Remote Shield" title="Remote Shield | Duration: 5 s | Amount: 4,500 hp | Range: 52,000 m" /><img src="https://images.evetech.net/types/27678/icon?size=32" className="small-icon" alt="Remote ECM Burst" title="Remote ECM Burst | Duration: 300 s | Min. Duration: 60 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/10038.jpg" className="img-thumbnail render-icon" alt="The Kundalini Manifest" title="The Kundalini Manifest" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,200,000</span> <span title="EHP" className="badge bg-warning hidden-xs">12,000,000</span></div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">746,945</span> <span title="EHP" className="badge bg-warning hidden-xs">1,310,430</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">685,720</span> <span title="EHP" className="badge bg-warning hidden-xs">685,720</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">2,632,665</span> <span title="EHP" className="badge bg-warning hidden-xs">13,996,150</span></div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 170,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 40,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 75 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 75 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 14,050 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 50 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="npcEntity" className="row">
        <div className="col-md-12"><h3>Uroborus <span className="badge"><img src="https://images.evetech.net/types/533/icon?size=32" className="small-icon" alt="Energy Neutralizer" title="Energy Neutralizer | Amount: 1,200 GJ | Range: 29,000 m | Duration: 24 s" /><img src="https://images.evetech.net/types/3586/icon?size=32" className="small-icon" alt="Remote Shield" title="Remote Shield | Duration: 5 s | Amount: 4,500 hp | Range: 52,000 m" /><img src="https://images.evetech.net/types/27678/icon?size=32" className="small-icon" alt="Remote ECM Burst" title="Remote ECM Burst | Duration: 300 s | Min. Duration: 60 s" /></span></h3></div>
        <div className="col-md-4 hidden-xs"><img src="/images/renders/256/10038.jpg" className="img-thumbnail render-icon" alt="Uroborus" title="Uroborus" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">1,200,000</span> <span title="EHP" className="badge bg-warning hidden-xs">12,000,000</span></div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">90%</div>
                    <div className="resi-inner" style={{width: '90%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">746,945</span> <span title="EHP" className="badge bg-warning hidden-xs">1,310,430</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">43%</div>
                    <div className="resi-inner" style={{width: '43%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
            <div className="col-3"><span title="HP" className="badge bg-primary">685,720</span> <span title="EHP" className="badge bg-warning hidden-xs">685,720</span>
            </div>
            <div className="col-8">
              <div className="row def-row">
                <div className="col-3 resi-bar em"><img src="/images/em.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar thermal"><img src="/images/thermal.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar kinetic"><img src="/images/kinetic.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
                <div className="col-3 resi-bar explosive"><img src="/images/explosive.png" className="resi-icon" />
                  <div className="resi-background">
                    <div className="resi-text">0%</div>
                    <div className="resi-inner" style={{width: '0%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"><strong>Total</strong></div>
            <div className="col-3"><span title="HP" className="badge bg-primary">2,632,665</span> <span title="EHP" className="badge bg-warning hidden-xs">13,996,150</span></div>
            <div className="col-8" />
          </div>
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Attack Range:</strong> 170,000 m</li>
                <li className="list-group-item"><strong>Orbit Range:</strong> 40,000 m</li>
                <li className="list-group-item"><strong>Orbit Speed:</strong> 75 m/s</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Chase Speed:</strong> 75 m/s</li>
                <li className="list-group-item"><strong>Signature Radius:</strong> 14,050 m</li>
                <li className="list-group-item"><strong>Scan Resolution:</strong> 50 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>);
}
