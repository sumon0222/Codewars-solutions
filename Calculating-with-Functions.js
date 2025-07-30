function zero(opr) { return opr? opr(0):0}
function one(opr) {return opr? opr(1):1}
function two(opr) {return opr? opr(2):2}
function three(opr) {return opr? opr(3):3}
function four(opr) {return opr? opr(4):4}
function five(opr) {return opr? opr(5):5}
function six(opr) {return opr? opr(6):6}
function seven(opr) {return opr? opr(7):7}
function eight(opr) {return opr? opr(8):8}
function nine(opr) {return opr? opr(9):9}

function plus(b) {return (a)=>a+b }
function minus(b) {return (a)=>a-b}
function times(b) {return (a)=>a*b}
function dividedBy(b) {return (a)=>Math.floor(a/b)}
