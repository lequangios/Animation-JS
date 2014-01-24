var position = [[202,119],[62,405],[342,405],[202,262]];

var pro = {
﻿  left:{ start:200, end:600}
};

var pro_b = {
﻿  left:{ start:600, end:200}
};

var funcs = {
﻿  "linearEase":linearEase,
﻿  "easeInQuad":easeInQuad,
﻿  "easeOutQuad":easeOutQuad,
﻿  "easeInOutQuad":easeInOutQuad,
﻿  "easeInCubic":easeInCubic,
﻿  "easeOutCubic":easeOutCubic,
﻿  "easeInOutCubic":easeInOutCubic,
﻿  "easeInQuart":easeInQuart,
﻿  "easeOutQuart":easeOutQuart,
﻿  "easeInOutQuart":easeInOutQuart,
﻿  "easeInQuint":easeInQuint,
﻿  "easeOutQuint":easeOutQuint,
﻿  "easeInOutQuint":easeInOutQuint,
﻿  "easeInSine":easeInSine,
﻿  "easeOutSine":easeOutSine,
﻿  "easeInOutSine":easeInOutSine,
﻿  "easeInExpo":easeInExpo,
﻿  "easeOutExpo":easeOutExpo,
﻿  "easeInCirc":easeInCirc,
﻿  "easeOutCirc":easeOutCirc,
﻿  "easeInOutCirc":easeInOutCirc,
﻿  "easeInElastic":easeInElastic,
﻿  "easeOutElastic":easeOutElastic,
﻿  "easeInOutElastic":easeInOutElastic,
﻿  "easeInBack":easeInBack,
﻿  "easeOutBack":easeOutBack,
﻿  "easeInOutBack":easeInOutBack,
﻿  "easeInBounce":easeInBounce,
﻿  "easeOutBounce":easeOutBounce,
﻿  "easeInOutBounce":easeInOutBounce
}

function Work(){
﻿  var elm = document.getElementById("button");
﻿  var selec = document.getElementById("choice").value;
﻿  var func  = funcs[selec];
﻿  //console.log(func);
﻿  animate(elm,pro,800,24,func);
}

function Reset(){
﻿  var elm = document.getElementById("button");
﻿  var selec = document.getElementById("choice").value;
﻿  var func  = funcs[selec];
﻿  animate(elm,pro_b,300,24,func);
}

window.onload = function(){
﻿  document.getElementById("run").addEventListener("click",Work,false);
﻿  document.getElementById("reset").addEventListener("click",Reset,false);
}
