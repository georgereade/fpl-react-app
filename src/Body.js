import React from "react";

function Body() {
    return (
<main>
    <div class="px-4 my-3 text-center">
        <img class="d-block mx-auto my-auto" src="./images/pl-main-logo.png" alt="" width="72" height="85"/>
        <h1 class="display-5">FPL Suggestions</h1>
        <div class="col-lg-6 mx-auto">
        <p class=" mb-4">Quick and easy fixture suggestions for transfers in coming weeks. Uses fixture difficulty logic, historical performance and team quality to determine best picks.</p>
        <p id="key">Key:</p>
        </div>
    </div>
    <div class="container col-6 themed-grid-col pt-1">
        <div class="easygame legend">Easy </div>
        <div class="mediumgame legend">Medium </div>  
        <div class="hardgame legend">Difficult </div>
    </div>
    <div class="container team-grid align-items-baseline justify-content-center">
    <div class="row col-12 flex-wrap text-center">
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/ars.png" alt="ars logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-1" id="ARS">NFO</div>
            <div class="nextgame fix-2" id="ARS">CRY</div>
            <div class="nextgame fix-3" id="ARS">FUL</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/avl.png" alt="avl logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-4" id="AVL">NEW</div>
            <div class="nextgame fix-5" id="AVL">EVE</div>
            <div class="nextgame fix-6" id="AVL">BUR</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/bou.png" alt="bou logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-7" id="BOU">WHU</div>
            <div class="nextgame fix-8" id="BOU">LIV</div>
            <div class="nextgame fix-9" id="BOU">TOT</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/bre.png" alt="bre logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-10" id="BRE">TOT</div>
            <div class="nextgame fix-11" id="BRE">FUL</div>
            <div class="nextgame fix-12" id="BRE">CRY</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/bri.png" alt="bri logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-13" id="BHA">LUT</div>
            <div class="nextgame fix-14" id="BHA">WOL</div>
            <div class="nextgame fix-15" id="BHA">WHU</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/bur.png" alt="bur logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-16" id="BUR">MCI</div>
            <div class="nextgame fix-17" id="BUR">NONE</div>
            <div class="nextgame fix-18" id="BUR">AVL</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/che.png" alt="che logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-19" id="CHE">LIV</div>
            <div class="nextgame fix-20" id="CHE">WHU</div>
            <div class="nextgame fix-21" id="CHE">LUT</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/cry.png" alt="cry logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-22" id="CRY">SHU</div>
            <div class="nextgame fix-23" id="CRY">ARS</div>
            <div class="nextgame fix-24" id="CRY">BRE</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/eve.png" alt="eve logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-25" id="EVE">FUL</div>
            <div class="nextgame fix-26" id="EVE">AVL</div>
            <div class="nextgame fix-27" id="EVE">WOL</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/ful.png" alt="ful logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-28" id="FUL">EVE</div>
            <div class="nextgame fix-29" id="FUL">BRE</div>
            <div class="nextgame fix-30" id="FUL">ARS</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/liv.png" alt="liv logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-31" id="LIV">CHE</div>
            <div class="nextgame fix-32" id="LIV">BOU</div>
            <div class="nextgame fix-33" id="LIV">NEW</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/lut.png" alt="lut logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-34" id="LUT">BHA</div>
            <div class="nextgame fix-35" id="LUT">NONE</div>
            <div class="nextgame fix-36" id="LUT">CHE</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/mci.png" alt="mci logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-37" id="MCI">BUR</div>
            <div class="nextgame fix-38" id="MCI">NEW</div>
            <div class="nextgame fix-39" id="MCI">SHU</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/mun.png" alt="mun logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-40" id="MUN">WOL</div>
            <div class="nextgame fix-41" id="MUN">TOT</div>
            <div class="nextgame fix-42" id="MUN">NFO</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/ntd.png" alt="newcastle logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-43" id="NTD">AVL</div>
            <div class="nextgame fix-44" id="NTD">MCI</div>
            <div class="nextgame fix-45" id="NTD">LIV</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/nfo.png" alt="forest logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-46" id="NFO">ARS</div>
            <div class="nextgame fix-47" id="NFO">SHU</div>
            <div class="nextgame fix-48" id="NFO">MUN</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/shu.png" alt="sheffield utd logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-49" id="SHU">CRY</div>
            <div class="nextgame fix-50" id="SHU">NFO</div>
            <div class="nextgame fix-51" id="SHU">MCI</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/tot.png" alt="spurs logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-52" id="TOT">BRE</div>
            <div class="nextgame fix-53" id="TOT">MUN</div>
            <div class="nextgame fix-54" id="TOT">BOU</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/whu.png" alt="west ham logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-55" id="WHU">BOU</div>
            <div class="nextgame fix-56" id="WHU">CHE</div>
            <div class="nextgame fix-57" id="WHU">BHA</div>
        </div>
        </div>
        <div class="col-xl-3 col-sm-4 col-6 team-name themed-grid-col"><img src="./images/wol.png" alt="wolves logo"/>
        <div class="fixtures">      
            <div class="nextgame fix-58" id="WOL">MUN</div>
            <div class="nextgame fix-59" id="WOL">BHA</div>
            <div class="nextgame fix-60" id="WOL">EVE</div>
        </div>
        </div>
    </div>
    </div>

    </main> 
    )
}

export default Body;