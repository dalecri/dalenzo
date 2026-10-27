(function(){
  var WAYS=[
    {id:"voile",name:"Voile",a:"#F2F2EE",b:"#2445C4"},
    {id:"cerise",name:"Cerise",a:"#D7263D",b:"#F4F4F0"},
    {id:"lichen",name:"Lichen",a:"#8C8E92",b:"#3E9A4A"}
  ];
  /* Edit this when a batch changes. Add colourway ids to soldOut, e.g. ["bouleau"], to grey them out. */
  var BATCH={no:"01",size:20,soldOut:[]};
  var PER=Math.round(BATCH.size/WAYS.length);
  var state={way:{name:WAYS[0].name,a:WAYS[0].a,b:WAYS[0].b},wayId:WAYS[0].id,len:118};
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  function hex(h){return [1,3,5].map(function(i){return parseInt(h.substr(i,2),16);});}
  function mix(a,b,t){var x=hex(a),y=hex(b);return "#"+x.map(function(v,i){return Math.round(v+(y[i]-v)*t).toString(16).padStart(2,"0");}).join("");}
  var tw;
  function tweenTo(target){
    cancelAnimationFrame(tw);
    var fa=state.way.a,fb=state.way.b,fc=state.way.c||state.way.a,tc=target.c||target.a,t0=performance.now(),dur=reduce?1:520;
    (function step(now){
      var t=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-t,3);
      state.way={name:target.name,a:mix(fa,target.a,e),b:mix(fb,target.b,e),c:mix(fc,tc,e)};
      render();
      if(t<1)tw=requestAnimationFrame(step);
    })(t0);
  }
  var kt,knotShown=118;
  function tweenLen(){
    cancelAnimationFrame(kt);
    (function step(){
      knotShown+=(state.len-knotShown)*(reduce?1:.22);
      if(Math.abs(state.len-knotShown)<.05)knotShown=state.len;
      render();
      if(knotShown!==state.len)kt=requestAnimationFrame(step);
    })();
  }

  var T={
    en:{lib_title:"Colour library",lib_note:"Studies for upcoming batches",lib_hint:"Select a colourway to preview it on the strap at the top of the page. Three-colour palettes show their third colour on the knot.",lib_tri:"Three colours",preview_only:"Preview only · not in this batch",sold_out:"Sold out",bag_btn:"Bag",add:"Add to bag",added:"Added",cart_title:"Your bag",checkout_title:"Checkout",close:"Close",empty:"Your bag is empty.",browse:"Browse the straps",remove:"Remove",qty_dec:"Decrease quantity",qty_inc:"Increase quantity",subtotal:"Subtotal",ship_note:"Shipping and taxes calculated at checkout.",taxes:"Taxes (GST/QST)",checkout:"Checkout",loop_only:"The Boucle ships with another piece. Add a strap or charm to check out.",charms_title:"Charms & keychains",charms_note:"4 mm and 2 mm paracord · mini carabiners · enamel charms",nav_charms:"Charms",theme_label:"Colour theme",max_note:"Up to "+PER+" per colourway in this batch.",back:"Back to bag",preview_banner:"Preview. Checkout isn't live yet and no payment is taken.",co_contact:"Contact",f_email:"Email",co_ship:"Shipping address",f_name:"Full name",f_addr:"Address",f_apt:"Apartment, suite (optional)",f_city:"City",f_prov:"Province",f_postal:"Postal code",co_method:"Shipping method",m_letter:"Lettermail, packed flat",m_parcel:"Tracked parcel",rate_tbd:"Rate at launch",co_pay:"Payment",pay_note:"Card payment is added at launch. This preview doesn't collect payment details.",summary:"Order summary",shipping:"Shipping",tbd:"At launch",place:"Place order",e_req:"Fill in this field.",e_email:"Enter an email like name@example.com.",e_postal:"Enter a Canadian postal code, like H2X 1Y4.",done:"Everything checks out. Checkout opens with Batch "+BATCH.no+", so no order was placed and nothing was charged.",batch:"Batch "+BATCH.no+" · "+BATCH.size+" straps",nav_craft:"Care & Craft",hint:"Move along the strap to slide the knot",st1:"Twenty straps.",st2:"One weekend.",craft_title:"Care & Craft",craft_note:"Four steps, every strap",c1:"Cut",c1d:"Measured on a marked bench and cut to length with a hot knife, so the sheath can't fray.",c2:"Seal",c2d:"Each end is fused with heat, then whipped tight with waxed thread.",c3:"Knot",c3d:"A double fisherman's knot, dressed and set by hand. It slides when you move it and holds when you don't.",c4:"Test",c4d:"5 kg hung for 24 hours with knot slip measured, and 50 open-close cycles on every clip.",care_title:"Care",care1:"Wipe clean with a damp cloth. For a deeper clean, hand wash in cool water and dry flat.",care2:"Keep away from open flame and high heat. Polyester melts.",care3:"Check the clips and knot before carrying anything heavy.",care4:"Decorative carry strap. Not for climbing.",nav_straps:"Straps",nav_spec:"Specifications",nav_atelier:"Atelier",kicker:"Labelle, Laurentides, Québec",hero_title:"Rope, made to carry.",hero_body:"Adjustable bag straps and charms in braided polyester rope and paracord, finished with round spring clips. Made by hand, in small batches.",hero_cta:"See the straps",len_label:"Length",colour_label:"Colourway",coll_title:"The straps",coll_note:"Batch "+BATCH.no+" · "+PER+" per colourway · CAD",bag_name:"Bag Strap 7.0",bag_desc:"7.0 mm rope, two round spring clips and one sliding knot. Clips to almost any bag loop.",phone_name:"Phone Strap 6.0",phone_desc:"6.0 mm cord with a tether tab that sits inside your case. Worn crossbody. Tab included.",loop_name:"Loop",loop_desc:"A short knotted loop cut from each batch's offcuts. For keys, a zip pull or a bag charm. Added to an order or at markets.",p45:"$45",p30:"$30",p15:"$15",spec_title:"Specifications",s_cord:"Cord",s_cord_v:"Polyester rope · nylon paracord · waxed polyester thread",s_dia:"Diameter",s_dia_v:"7.0 mm rope · 4 mm and 2 mm paracord",s_len:"Length",s_len_v:"86–150 cm, adjustable",s_hw:"Hardware",s_hw_v:"Round spring rings, mini carabiners, enamel charms",s_test:"Tested",s_test_v:"5 kg hung for 24 h · 50 clip cycles · two weeks of daily wear",s_made:"Made in",s_note:"Decorative carry strap. Not for climbing. DALENZO is not responsible for damage or loss caused by a fall.",atelier_title:"Atelier",atelier_body:"One bench, one weekend a month. Each batch is twenty straps, cut, heat-sealed, knotted and load-tested by hand, then laid flat and packed.",shop_title:"First batch, three colourways.",shop_body:"Etsy shop opening soon."},
    fr:{lib_title:"Bibliothèque de couleurs",lib_note:"Études pour les prochaines séries",lib_hint:"Sélectionnez un coloris pour l'essayer sur la sangle en haut de la page. Les palettes à trois couleurs montrent la troisième sur le nœud.",lib_tri:"Trois couleurs",preview_only:"Aperçu · pas dans cette série",sold_out:"Épuisé",bag_btn:"Panier",add:"Ajouter au panier",added:"Ajouté",cart_title:"Votre panier",checkout_title:"Caisse",close:"Fermer",empty:"Votre panier est vide.",browse:"Voir les sangles",remove:"Retirer",qty_dec:"Diminuer la quantité",qty_inc:"Augmenter la quantité",subtotal:"Sous-total",ship_note:"Livraison et taxes calculées à la caisse.",taxes:"Taxes (TPS/TVQ)",instagram:"Instagram",checkout:"Passer à la caisse",loop_only:"La Boucle est expédiée avec une autre pièce. Ajoutez une sangle ou une breloque pour passer à la caisse.",charms_title:"Breloques et porte-clés",charms_note:"Paracorde 4 mm et 2 mm · mini mousquetons · breloques émaillées",nav_charms:"Breloques",theme_label:"Thème de couleur",max_note:"Maximum "+PER+" par coloris dans cette série.",back:"Retour au panier",preview_banner:"Aperçu. La caisse n'est pas encore active et aucun paiement n'est perçu.",co_contact:"Coordonnées",f_email:"Courriel",co_ship:"Adresse de livraison",f_name:"Nom complet",f_addr:"Adresse",f_apt:"App., bureau (facultatif)",f_city:"Ville",f_prov:"Province",f_postal:"Code postal",co_method:"Mode de livraison",m_letter:"Poste-lettres, emballé à plat",m_parcel:"Colis avec suivi",rate_tbd:"Tarif au lancement",co_pay:"Paiement",pay_note:"Le paiement par carte sera ajouté au lancement. Cet aperçu ne recueille aucune information de paiement.",summary:"Récapitulatif",shipping:"Livraison",tbd:"Au lancement",place:"Passer la commande",e_req:"Remplissez ce champ.",e_email:"Entrez un courriel comme nom@exemple.com.",e_postal:"Entrez un code postal canadien, comme H2X 1Y4.",done:"Tout est en ordre. La caisse ouvrira avec la Série "+BATCH.no+" : aucune commande n'a été passée et rien n'a été facturé.",batch:"Série "+BATCH.no+" · "+BATCH.size+" sangles",nav_craft:"Fabrication",hint:"Glissez le long de la sangle pour déplacer le nœud",st1:"Vingt sangles.",st2:"Une fin de semaine.",craft_title:"Fabrication et entretien",craft_note:"Quatre étapes, chaque sangle",c1:"Couper",c1d:"Mesurée sur un établi gradué et coupée au couteau chauffant, pour que la gaine ne s'effiloche pas.",c2:"Sceller",c2d:"Chaque extrémité est fusionnée à la chaleur, puis serrée d'un fil ciré.",c3:"Nouer",c3d:"Un double nœud de pêcheur, ajusté et serré à la main. Il glisse quand on le déplace et tient le reste du temps.",c4:"Tester",c4d:"5 kg suspendus pendant 24 heures en mesurant le glissement du nœud, et 50 cycles d'ouverture par mousqueton.",care_title:"Entretien",care1:"Essuyez avec un linge humide. Pour un nettoyage complet, lavez à la main à l'eau froide et séchez à plat.",care2:"Tenir loin des flammes et de la chaleur intense. Le polyester fond.",care3:"Vérifiez les mousquetons et le nœud avant de porter une charge lourde.",care4:"Sangle de transport décorative. Ne convient pas à l'escalade.",nav_straps:"Sangles",nav_spec:"Fiche technique",nav_atelier:"Atelier",kicker:"Labelle, Laurentides, Québec",hero_title:"La corde, faite pour porter.",hero_body:"Sangles de sac ajustables et breloques en corde de polyester tressée et en paracorde, finies d'anneaux à ressort. Faites à la main, en petites séries.",hero_cta:"Voir les sangles",len_label:"Longueur",colour_label:"Coloris",coll_title:"Les sangles",coll_note:"Série "+BATCH.no+" · "+PER+" par coloris · $ CA",bag_name:"Sangle de sac 7.0",bag_desc:"Corde de 7,0 mm, deux anneaux à ressort et un nœud coulissant. S'attache à presque toutes les boucles de sac.",phone_name:"Sangle de téléphone 6.0",phone_desc:"Corde de 6,0 mm avec une languette qui se glisse dans votre étui. Se porte en bandoulière. Languette incluse.",loop_name:"Boucle",loop_desc:"Une courte boucle nouée, faite des retailles de chaque série. Pour les clés, une fermeture éclair ou un sac. En ajout à une commande ou au marché.",p45:"45 $",p30:"30 $",p15:"15 $",spec_title:"Fiche technique",s_cord:"Corde",s_cord_v:"Corde en polyester · paracorde en nylon · fil de polyester ciré",s_dia:"Diamètre",s_dia_v:"Corde 7,0 mm · paracorde 4 mm et 2 mm",s_len:"Longueur",s_len_v:"86 à 150 cm, ajustable",s_hw:"Quincaillerie",s_hw_v:"Anneaux à ressort ronds, mini mousquetons, breloques émaillées",s_test:"Essais",s_test_v:"5 kg suspendus 24 h · 50 cycles d'ouverture · deux semaines d'usage quotidien",s_made:"Fabrication",s_note:"Sangle de transport décorative. Ne convient pas à l'escalade. DALENZO n'est pas responsable des dommages ou des pertes causés par une chute.",atelier_title:"Atelier",atelier_body:"Un établi, une fin de semaine par mois. Chaque série compte vingt sangles, coupées, scellées à chaud, nouées et testées à la main, puis posées à plat et emballées.",shop_title:"Première série, trois coloris.",shop_body:"Boutique Etsy bientôt ouverte."}
  };
  var lang="en";
  function setLang(l,animate){
    if(animate&&!reduce&&l!==lang){
      document.body.classList.add("swapping");
      setTimeout(function(){setLang(l,false);requestAnimationFrame(function(){document.body.classList.remove("swapping");});},200);
      return;
    }
    lang=T[l]?l:"en";
    document.documentElement.lang=lang==="fr"?"fr-CA":"en-CA";
    document.querySelectorAll("[data-i18n]").forEach(function(el){var v=T[lang][el.getAttribute("data-i18n")];if(v)el.textContent=v;});
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){var v=T[lang][el.getAttribute("data-i18n-aria")];if(v)el.setAttribute("aria-label",v);});
    document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.lang===lang));});
    updateLen();
    if(SHOP)renderShop();
    if(cart){renderCart();fillProv();}
    try{localStorage.setItem("dalenzo-lang",lang)}catch(e){}
  }

  /* ---- rope drawing ---- */
  function spline(pts,n){
    var out=[];
    for(var i=0;i<pts.length-1;i++){
      var p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
      for(var j=0;j<n;j++){
        var t=j/n,t2=t*t,t3=t2*t;
        out.push([
          .5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
          .5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)
        ]);
      }
    }
    out.push(pts[pts.length-1]);
    return out;
  }
  function frames(pts){
    var acc=[0];
    for(var i=1;i<pts.length;i++){acc.push(acc[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));}
    return acc;
  }
  function at(pts,acc,d){
    var L=acc[acc.length-1];d=Math.max(0,Math.min(L,d));
    var i=1;while(i<acc.length-1&&acc[i]<d)i++;
    var seg=acc[i]-acc[i-1]||1,f=(d-acc[i-1])/seg;
    var x=pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,y=pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f;
    var tx=(pts[i][0]-pts[i-1][0])/seg,ty=(pts[i][1]-pts[i-1][1])/seg;
    return {x:x,y:y,tx:tx,ty:ty,nx:-ty,ny:tx};
  }
  function strokePath(ctx,pts){ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(var i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.stroke();}

  function clip(ctx,f,w,dir){
    var ang=Math.atan2(f.ty*dir,f.tx*dir);
    ctx.save();ctx.translate(f.x,f.y);ctx.rotate(ang);
    ctx.strokeStyle="#8C8F93";ctx.lineWidth=Math.max(1.5,w*.26);ctx.lineJoin="round";
    /* round spring-gate ring, as bought */
    var R=w*1.35,cx=R*.95;
    ctx.beginPath();ctx.arc(cx,0,R,0,Math.PI*2);ctx.stroke();
    ctx.strokeStyle="#5E6165";ctx.lineWidth=Math.max(1,w*.1);
    ctx.beginPath();ctx.moveTo(cx+R*.62,-R*.62);ctx.lineTo(cx+R*.98,-R*.3);ctx.stroke();
    ctx.strokeStyle="#C9CCD0";ctx.lineWidth=Math.max(1,w*.1);
    ctx.beginPath();ctx.arc(cx,0,R,3.6,4.6);ctx.stroke();
    ctx.restore();
  }

  function drawRope(cv,shape,opt){
    var r=cv.getBoundingClientRect();if(!r.width)return;
    var dpr=Math.min(2,window.devicePixelRatio||1);
    cv.width=Math.round(r.width*dpr);cv.height=Math.round(r.height*dpr);
    var ctx=cv.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,r.width,r.height);
    var W=r.width,H=r.height,w=Math.min(W,H)*opt.w;
    var pts=spline(shape.map(function(p){return [p[0]*W,p[1]*H];}),40);
    var acc=frames(pts),L=acc[acc.length-1],way=state.way;
    ctx.lineCap="round";ctx.lineJoin="round";

    ctx.save();
    ctx.shadowColor="rgba(0,0,0,.22)";ctx.shadowBlur=w*1.1;ctx.shadowOffsetY=w*.45;
    ctx.strokeStyle=way.a;ctx.lineWidth=w;strokePath(ctx,pts);
    ctx.restore();

    var step=w*.42,k=0;
    ctx.strokeStyle=way.b;ctx.lineWidth=Math.max(1,w*.15);
    for(var d=step*.5;d<L;d+=step,k++){
      var f=at(pts,acc,d),s=w*.46,fw=w*.2;
      ctx.globalAlpha=k%2?.9:.65;
      ctx.beginPath();
      ctx.moveTo(f.x+f.nx*s-f.tx*fw,f.y+f.ny*s-f.ty*fw);ctx.lineTo(f.x+f.tx*fw*.4,f.y+f.ty*fw*.4);
      ctx.lineTo(f.x-f.nx*s-f.tx*fw,f.y-f.ny*s-f.ty*fw);
      ctx.stroke();
    }
    ctx.globalAlpha=1;

    ctx.strokeStyle="rgba(255,255,255,.16)";ctx.lineWidth=Math.max(1,w*.12);
    strokePath(ctx,pts.map(function(p,i){var f=at(pts,acc,acc[i]);return [p[0]-f.nx*w*.24,p[1]-f.ny*w*.24];}));

    if(opt.knot!=null){
      var kd=L*opt.knot,kf=at(pts,acc,kd);
      /* tail running beside the rope from the knot, ending in a metal cap */
      var tail=[];for(var td=0;td<=w*5;td+=2){var g=at(pts,acc,kd-td);tail.push([g.x+g.nx*w*1.05,g.y+g.ny*w*1.05]);}
      ctx.save();ctx.shadowColor="rgba(0,0,0,.18)";ctx.shadowBlur=w*.6;ctx.shadowOffsetY=w*.25;
      ctx.strokeStyle=way.a;ctx.lineWidth=w*.92;strokePath(ctx,tail);ctx.restore();
      var te=tail[tail.length-1],tf=at(pts,acc,kd-w*5);
      ctx.save();ctx.translate(te[0],te[1]);ctx.rotate(Math.atan2(-tf.ty,-tf.tx));
      ctx.fillStyle="#9EA1A5";ctx.fillRect(-w*.2,-w*.5,w*1.0,w*1.0);ctx.fillStyle="#C9CBCE";ctx.fillRect(-w*.2,-w*.5,w*1.0,w*.22);ctx.restore();
      ctx.save();ctx.translate(kf.x+kf.nx*w*.5,kf.y+kf.ny*w*.5);ctx.rotate(Math.atan2(kf.ny,kf.nx));
      for(var j=-1;j<=1;j++){
        ctx.save();ctx.translate(0,j*w*.62);
        ctx.shadowColor="rgba(0,0,0,.25)";ctx.shadowBlur=w*.5;ctx.shadowOffsetY=w*.15;
        ctx.fillStyle=way.c||way.a;ctx.beginPath();ctx.ellipse(0,0,w*1.25,w*.42,0,0,Math.PI*2);ctx.fill();
        ctx.shadowColor="transparent";ctx.strokeStyle=way.b;ctx.globalAlpha=.7;ctx.lineWidth=Math.max(1,w*.12);
        ctx.beginPath();ctx.ellipse(0,0,w*.9,w*.18,0,Math.PI*.15,Math.PI*.85);ctx.stroke();ctx.globalAlpha=1;
        ctx.restore();
      }
      ctx.restore();
    }
    if(opt.clips){clip(ctx,at(pts,acc,0),w,-1);clip(ctx,at(pts,acc,L),w,1);}
    if(opt.cap){var cf=at(pts,acc,L);ctx.save();ctx.translate(cf.x,cf.y);ctx.rotate(Math.atan2(cf.ty,cf.tx));ctx.fillStyle="#3A3B3D";ctx.fillRect(-w*1.6,-w*.56,w*1.9,w*1.12);ctx.fillStyle="rgba(255,255,255,.18)";ctx.fillRect(-w*1.6,-w*.56,w*1.9,w*.22);ctx.restore();}
    return {ctx:ctx,pts:pts,acc:acc,w:w,W:W,H:H};
  }

  function renderSteps(){
    var ink=getComputedStyle(document.body).color,paper=getComputedStyle(document.body).backgroundColor,g,p;
    g=drawRope(document.getElementById("st-cut"),[[.14,.84],[.36,.62],[.6,.42],[.88,.18]],{w:.075});
    if(g){p=at(g.pts,g.acc,g.acc[g.acc.length-1]*.7);g.ctx.save();g.ctx.strokeStyle=ink;g.ctx.lineWidth=1.25;g.ctx.setLineDash([5,5]);g.ctx.beginPath();g.ctx.moveTo(p.x+p.nx*g.w*2.4,p.y+p.ny*g.w*2.4);g.ctx.lineTo(p.x-p.nx*g.w*2.4,p.y-p.ny*g.w*2.4);g.ctx.stroke();g.ctx.restore();}
    drawRope(document.getElementById("st-seal"),[[.12,.86],[.3,.66],[.5,.5],[.74,.34]],{w:.085,cap:true});
    drawRope(document.getElementById("st-knot"),[[.22,.9],[.24,.5],[.5,.26],[.76,.5],[.78,.9]],{w:.075,knot:.66});
    g=drawRope(document.getElementById("st-test"),[[.5,.2],[.49,.33],[.51,.45],[.5,.54]],{w:.06,clips:true});
    if(g){p=at(g.pts,g.acc,g.acc[g.acc.length-1]);var bw=g.w*6,bh=g.w*4.6,by=p.y+g.w*4.4;
      g.ctx.fillStyle=ink;g.ctx.fillRect(p.x-bw/2,by,bw,bh);
      g.ctx.fillStyle=paper;g.ctx.font="500 "+Math.round(g.w*1.4)+"px 'IBM Plex Mono', monospace";g.ctx.textAlign="center";g.ctx.textBaseline="middle";g.ctx.fillText("5 kg",p.x,by+bh/2);}
  }

  var SHAPES={
    hero:[[.19,.76],[.12,.54],[.16,.29],[.34,.12],[.60,.10],[.83,.22],[.89,.48],[.83,.74]],
    bag:[[.25,.72],[.18,.48],[.26,.24],[.50,.14],[.74,.24],[.82,.48],[.75,.72]],
    phone:[[.50,.16],[.30,.28],[.20,.52],[.30,.78],[.52,.86],[.72,.74],[.80,.50],[.66,.24],[.56,.18]],
    loop:[[.50,.80],[.33,.66],[.31,.44],[.42,.30],[.58,.30],[.69,.44],[.67,.66],[.53,.79]]
  };
  function render(){
    var lenT=(knotShown-86)/64;
    heroGeo=drawRope(document.getElementById("hero-rope"),SHAPES.hero,{w:.042,knot:.62+lenT*.28,clips:true});
    renderSteps();
  }
  var heroGeo=null;

  var lenIn=document.getElementById("len"),lenOut=document.getElementById("len-out");
  function updateLen(){state.len=+lenIn.value;lenOut.textContent=state.len+" cm";}
  lenIn.addEventListener("input",function(){updateLen();tweenLen();});

  var row=document.getElementById("sw-row"),swName=document.getElementById("sw-name");
  WAYS.forEach(function(wy,i){
    var b=document.createElement("button");
    b.type="button";b.className="sw";b.id="sw-"+wy.id;b.setAttribute("role","radio");b.setAttribute("aria-label",wy.name);
    b.style.background=wy.a;b.setAttribute("aria-checked",String(i===0));
    var sold=BATCH.soldOut.indexOf(wy.id)>-1;
    if(sold){b.dataset.sold="true";b.setAttribute("aria-disabled","true");b.setAttribute("aria-label",wy.name+", sold out");b.title=wy.name+" · sold out";}
    b.addEventListener("click",function(){
      if(sold)return;
      tweenTo(wy);swName.textContent=wy.name;state.wayId=wy.id;setWayLabels();setPreview(null);
      row.querySelectorAll(".sw").forEach(function(x){x.setAttribute("aria-checked",String(x===b));});
    });
    row.appendChild(b);
  });
  swName.textContent=state.way.name;

  document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.lang,true);});});

  /* ---- shop: designs with three colour themes each; images live at the repo root as <product>--<theme>.webp ---- */
  var SHOP={
    straps:[
      {id:"cobra",price:60,names:{en:"Cobra Strap",fr:"Sangle Cobra"},desc:{en:"7 mm rope with a purple cobra-weave shoulder pad, waxed-thread wraps, a snake-knot side cord and a 2 mm tassel with an enamel charm.",fr:"Corde de 7 mm, épaulière tressée en cobra violet, enroulements de fil ciré, cordon latéral en nœud serpent et pompon de 2 mm avec breloque émaillée."},themes:[{id:"voile",name:"Voile",dots:["#F2F2EE","#4B2A8C","#B9A6E0"]},{id:"cerise",name:"Cerise",dots:["#D7263D","#241A33","#B9A6E0"]},{id:"lichen",name:"Lichen",dots:["#8C8E92","#7A4FD0","#B9A6E0"]},{id:"aurore",soldOut:true,name:"Aurore",dots:["#5B3FA8","#C8F031","#F28DB2"]},{id:"carnaval",soldOut:true,name:"Carnaval",dots:["#EFEDE6","#1F5BFF","#FF3D8B"]},{id:"riviere",soldOut:true,name:"Rivière",dots:["#0E6E73","#E8A33A","#EFEDE6"]}]},
      {id:"trail",price:58,names:{en:"Trail Strap",fr:"Sangle Sentier"},desc:{en:"Cobra-weave pad, waxed-thread wraps, a sliding knot for length and a two-tone snake-knot grip.",fr:"Épaulière en cobra, enroulements de fil ciré, nœud coulissant pour la longueur et prise en nœud serpent deux tons."},themes:[{id:"voile",name:"Voile",dots:["#F2F2EE","#241A33","#7A4FD0"]},{id:"cerise",name:"Cerise",dots:["#D7263D","#4B2A8C","#B9A6E0"]},{id:"lichen",name:"Lichen",dots:["#8C8E92","#7A4FD0","#B8F03A"]},{id:"bouleau",soldOut:true,name:"Bouleau",dots:["#EFEDE6","#161616","#FF5A1F"]},{id:"maree",soldOut:true,name:"Marée",dots:["#1E2A44","#BFE3F2","#FF7A59"]},{id:"sentier",soldOut:true,name:"Sentier",dots:["#161616","#FF5A1F","#C9CCD1"]}]},
      {id:"duo",price:55,names:{en:"Duo Strap",fr:"Sangle Duo"},desc:{en:"A 7 mm rope paired with a 4 mm paracord, joined by waxed-thread wraps, with a snake-knot centre and a sliding knot.",fr:"Corde de 7 mm jumelée à un paracorde de 4 mm, reliés par des enroulements de fil ciré, centre en nœud serpent et nœud coulissant."},themes:[{id:"cerise",name:"Cerise",dots:["#D7263D","#B9A6E0","#F4F4F0"]},{id:"lichen",name:"Lichen",dots:["#8C8E92","#7A4FD0","#B8F03A"]},{id:"voile",name:"Voile",dots:["#F2F2EE","#4B2A8C","#FF4FA0"]},{id:"erable",soldOut:true,name:"Érable",dots:["#C8371D","#F4DE7A","#161616"]},{id:"glace",soldOut:true,name:"Glace",dots:["#BFE3F2","#1F5BFF","#FF3D8B"]},{id:"volt",soldOut:true,name:"Volt",dots:["#86C232","#9CC9EE","#F4F2EC"]}]},
      {id:"faisceau",price:52,names:{en:"Faisceau Lanyard",fr:"Faisceau"},desc:{en:"Three 4 mm strands on a round spring ring: a loop chain into a spiral, a flecked cord with bubble knots, and a snake-to-cobra strand.",fr:"Trois brins de 4 mm sur un anneau à ressort : chaîne de boucles et spirale, cordon moucheté à nœuds bulles, et brin serpent-cobra."},themes:[{id:"violette",name:"Violette",dots:["#4B2A8C","#B9A6E0","#F2C14E"]},{id:"neon",name:"Néon",dots:["#241A33","#7A4FD0","#FF4FA0"]}]},
      {id:"poignee",price:40,names:{en:"Poignée Handle",fr:"Poignée"},desc:{en:"A short carry handle: cobra, bubble knots and a half-knot spiral between waxed-thread wraps, with two mini carabiners.",fr:"Une courte poignée : cobra, nœuds bulles et spirale entre des enroulements de fil ciré, avec deux mini mousquetons."},themes:[{id:"violette",name:"Violette",dots:["#4B2A8C","#B9A6E0","#F2C14E"]},{id:"nuit",name:"Nuit",dots:["#241A33","#7A4FD0","#B8F03A"]}]},
      {id:"wide",soldOut:true,price:65,names:{en:"Wide Pad Strap",fr:"Sangle Large"},desc:{en:"Our widest cobra pad, for heavier bags, with a snake-knot detail and a three-strand beaded tassel.",fr:"Notre épaulière cobra la plus large, pour les sacs plus lourds, avec détail en nœud serpent et pompon perlé à trois brins."},themes:[{id:"agrume",soldOut:true,name:"Agrume",dots:["#9A5B33","#F4B400","#FF6A2B"]},{id:"lac",soldOut:true,name:"Lac",dots:["#0E6E73","#7FD6D2","#EFEDE6"]},{id:"neon",soldOut:true,name:"Néon",dots:["#1E2A44","#FF3D8B","#C8F031"]},{id:"minuit",name:"Minuit",dots:["#161616","#C2459B","#8FE0C8"]}]}
    ],
    charms:[
      {id:"goutte",price:26,names:{en:"Goutte",fr:"Goutte"},desc:{en:"Purple cobra weave with a 2 mm tassel and an enamel charm.",fr:"Tressage cobra violet, pompon de 2 mm et breloque émaillée."},themes:[{id:"violette",name:"Violette",dots:["#4B2A8C","#B9A6E0","#FF4FA0"]},{id:"nuit",name:"Nuit",dots:["#241A33","#7A4FD0","#B8F03A"]},{id:"riviere",soldOut:true,name:"Rivière",dots:["#0E6E73","#F4DE7A","#FF7A59"]},{id:"sorbet",soldOut:true,name:"Sorbet",dots:["#FF6A2B","#B9A6E0","#1F5BFF"]}]},
      {id:"serpent",price:24,names:{en:"Serpent",fr:"Serpent"},desc:{en:"Snake knot beside a 2 mm cord with waxed wraps and an enamel charm.",fr:"Nœud serpent à côté d'un cordon de 2 mm, enroulements de fil ciré et breloque émaillée."},themes:[{id:"violette",name:"Violette",dots:["#4B2A8C","#FF4FA0"]},{id:"lilas",name:"Lilas",dots:["#B9A6E0","#B8F03A"]},{id:"nuit",name:"Nuit",dots:["#241A33","#2E8B3E"]},{id:"baie",soldOut:true,name:"Baie",dots:["#C2185B","#F8BBD0"]},{id:"mousse",soldOut:true,name:"Mousse",dots:["#4B5A2A","#B6D33A"]}]},
      {id:"vague",price:26,names:{en:"Vague",fr:"Vague"},desc:{en:"Two-tone wave weave with split, heat-sealed tails.",fr:"Tressage en vague deux tons, queues séparées scellées à chaud."},themes:[{id:"violette",name:"Violette",dots:["#4B2A8C","#B9A6E0"]},{id:"nuit",name:"Nuit",dots:["#241A33","#7A4FD0"]},{id:"balise",soldOut:true,name:"Balise",dots:["#161616","#FF5A1F"]},{id:"cobalt",soldOut:true,name:"Cobalt",dots:["#2445C4","#F4F2EC"]},{id:"rose",soldOut:true,name:"Rose",dots:["#FF3D8B","#F4F2EC"]}]},
      {id:"noeud",price:22,names:{en:"Nœud",fr:"Nœud"},desc:{en:"A paracord bow with a small snake-knot fob on a round spring ring.",fr:"Un nœud papillon en paracorde et une petite breloque en nœud serpent sur anneau à ressort."},themes:[{id:"lilas",name:"Lilas",dots:["#B9A6E0","#4B2A8C"]},{id:"violette",name:"Violette",dots:["#7A4FD0","#241A33"]}]},
      {id:"micro",price:18,names:{en:"Micro",fr:"Micro"},desc:{en:"A 2 mm micro cobra in two colours with an enamel charm, on a black mini carabiner.",fr:"Un micro cobra de 2 mm deux tons, breloque émaillée et mini mousqueton noir."},themes:[{id:"rose",name:"Rose",dots:["#FF4FA0","#B8F03A"]},{id:"sapin",name:"Sapin",dots:["#2E8B3E","#FF4FA0"]},{id:"lime",name:"Lime",dots:["#B8F03A","#2E8B3E"]}]},
      {id:"royal",price:30,names:{en:"Royal",fr:"Royal"},desc:{en:"Wide king cobra weave, a waxed-thread wrap and a mixed 4 mm and 2 mm tassel.",fr:"Large tressage cobra royal, enroulement de fil ciré et pompon de 4 mm et 2 mm."},themes:[{id:"violette",name:"Violette",dots:["#4B2A8C","#B9A6E0","#F2C14E"]},{id:"nuit",name:"Nuit",dots:["#241A33","#7A4FD0","#B8F03A"]},{id:"aurore",soldOut:true,name:"Aurore",dots:["#5B3FA8","#C8F031","#F28DB2"]},{id:"braise",soldOut:true,name:"Braise",dots:["#161616","#FF5A1F","#C9CCD1"]}]},
      {id:"boucle",price:15,addon:true,names:{en:"Boucle",fr:"Boucle"},desc:{en:"A 7 mm offcut loop with three waxed-thread wraps and an enamel charm. Ships with another piece.",fr:"Une boucle de 7 mm faite de retailles, trois enroulements de fil ciré et une breloque émaillée. Expédiée avec une autre pièce."},themes:[{id:"voile",name:"Voile",dots:["#F2F2EE","#FF4FA0","#2445C4"]},{id:"cerise",name:"Cerise",dots:["#D7263D","#F4F4F0","#F2C14E"]},{id:"lichen",name:"Lichen",dots:["#8C8E92","#FF7A1A","#2E8B3E"]},{id:"granit",soldOut:true,name:"Granit",dots:["#5E6670","#FF5A1F","#C8F031"]},{id:"lilas",soldOut:true,name:"Lilas",dots:["#B9A6E0","#FF6A2B","#1F5BFF"]},{id:"peche",soldOut:true,name:"Pêche",dots:["#F6B89A","#1E2A44","#0E6E73"]}]},
      {id:"anneaux",soldOut:true,price:28,names:{en:"Anneaux",fr:"Anneaux"},desc:{en:"Fleck cord threaded through four acrylic rings.",fr:"Cordon moucheté enfilé dans quatre anneaux d'acrylique."},themes:[{id:"baie",name:"Baie",dots:["#C2185B","#9CC3F0","#F4DE7A"]},{id:"nuit",name:"Nuit",dots:["#161616","#FF5A1F","#C8F031"]},{id:"sable",name:"Sable",dots:["#C9A27A","#0E6E73","#FF7A59"]},{id:"fete",name:"Fête",dots:["#F2C14E","#D7263D","#1F5BFF"]}]},
      {id:"echelle",soldOut:true,price:22,names:{en:"Échelle",fr:"Échelle"},desc:{en:"Two thin cords with seven staggered beads.",fr:"Deux cordons fins et sept perles en quinconce."},themes:[{id:"marine",name:"Marine",dots:["#1E2A44","#FF7A59","#BFE3F2"]},{id:"nuit",name:"Nuit",dots:["#161616","#C8F031","#FF3D8B"]},{id:"ivoire",name:"Ivoire",dots:["#D9D5CA","#1F5BFF","#1E2A44"]},{id:"automne",name:"Automne",dots:["#5A3A22","#D2352B","#7A55D3"]}]}
    ]
  };
  var SEL={};
  function dotsBg(d){return d.length>2?"conic-gradient("+d[0]+" 0 50%,"+d[1]+" 50% 75%,"+d[2]+" 75%)":"linear-gradient(135deg,"+d[0]+" 0 50%,"+d[1]+" 50%)";}
  function cardHTML(p){
    var th=SEL[p.id]||p.themes[0].id,cur=p.themes.filter(function(x){return x.id===th;})[0]||p.themes[0],nm=p.names[lang]||p.names.en;
    var so=!!p.soldOut;return '<article class="item'+(so?' sold':'')+'" data-pid="'+p.id+'"><div class="pimg"><img src="'+p.id+'--'+cur.id+'.webp" alt="'+esc(nm+" · "+cur.name)+'" loading="lazy" width="390" height="720"></div>'+
      '<div class="item-row"><h3>'+esc(nm)+'</h3><span class="price mono">'+(so?'<s>'+esc(money(p.price))+'</s> '+esc(t("sold_out")):esc(money(p.price)))+'</span></div><p>'+esc(p.desc[lang]||p.desc.en)+'</p>'+
      '<div class="themes" role="radiogroup" aria-label="'+esc(t("theme_label"))+'">'+p.themes.map(function(x){return '<button class="th-sw'+(x.soldOut?' so':'')+'" type="button" role="radio" aria-checked="'+(x.id===cur.id)+'" data-theme="'+x.id+'" aria-label="'+esc(x.name)+'" title="'+esc(x.name)+'" style="background:'+dotsBg(x.dots)+'"></button>';}).join("")+'</div>'+
      '<div class="item-row buy"><span class="item-way mono">'+esc(cur.name)+'</span><button class="add" type="button" data-shop="'+p.id+'" data-theme="'+cur.id+'"'+(so||cur.soldOut?' disabled':'')+'>'+esc(t(so||cur.soldOut?"sold_out":"add"))+'</button></div></article>';
  }
  function renderShop(){
    document.getElementById("grid-straps").innerHTML=SHOP.straps.map(cardHTML).join("");
    document.getElementById("grid-charms").innerHTML=SHOP.charms.map(cardHTML).join("");
  }
  function shopById(id){var all=SHOP.straps.concat(SHOP.charms);for(var i=0;i<all.length;i++)if(all[i].id===id)return all[i];return null;}
  ["grid-straps","grid-charms"].forEach(function(gid){
    document.getElementById(gid).addEventListener("click",function(e){
      var sw=e.target.closest(".th-sw"),ad=e.target.closest("[data-shop]");
      if(sw){
        var card=sw.closest(".item"),p=shopById(card.dataset.pid),x=p.themes.filter(function(q){return q.id===sw.dataset.theme;})[0];
        SEL[p.id]=x.id;
        card.querySelectorAll(".th-sw").forEach(function(b){b.setAttribute("aria-checked",String(b===sw));});
        card.querySelector(".item-way").textContent=x.name;var ab=card.querySelector("[data-shop]");ab.dataset.theme=x.id;var xs=!!(p.soldOut||x.soldOut);ab.disabled=xs;ab.textContent=t(xs?"sold_out":"add");
        var img=card.querySelector(".pimg img"),src=""+p.id+"--"+x.id+".webp",nm=p.names[lang]||p.names.en;
        if(reduce){img.src=src;img.alt=nm+" · "+x.name;return;}
        img.classList.add("fading");
        setTimeout(function(){var pre=new Image();pre.onload=pre.onerror=function(){img.src=src;img.alt=nm+" · "+x.name;img.classList.remove("fading");};pre.src=src;},180);
      }else if(ad){addItem(ad.dataset.shop,ad);}
    });
  });
  renderShop();

  /* reveal sections below the first screen as they scroll in; anything already in view stays visible */
  var targets=document.querySelectorAll(".sec-head, .item, .step, .care, .statement .line, .spec dl, .note, .atelier p, .shop h2, .shop p");
  if("IntersectionObserver" in window&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var d=e.target.dataset.d||0;setTimeout(function(){e.target.classList.remove("pre");},d);io.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"});
    targets.forEach(function(el){
      el.classList.add("reveal");
      if(el.getBoundingClientRect().top>window.innerHeight){el.classList.add("pre");io.observe(el);}
    });
    document.querySelectorAll(".pgrid .item").forEach(function(el,i){el.dataset.d=(i%4)*110;});
    document.querySelectorAll(".steps .step").forEach(function(el,i){el.dataset.d=i*110;});
    document.querySelectorAll(".statement .line").forEach(function(el,i){el.dataset.d=i*220;});
    setTimeout(function(){targets.forEach(function(el){el.classList.remove("pre");});},6000);
  }
  /* ---- bag & checkout: UI preview only. Payment and real orders get wired in at launch. ---- */
  var PRODUCTS={bag:{price:45,name:"bag_name"}};
  SHOP.straps.concat(SHOP.charms).forEach(function(p){PRODUCTS[p.id]=p;});
  function pname(p){return p.names?(p.names[lang]||p.names.en):t(p.name);}
  function themeOf(pid,tid){var p=PRODUCTS[pid];if(!p)return null;if(!p.themes){var w=wayById(tid);return w?{id:w.id,name:w.name,dots:[w.a,w.b]}:null;}var x=p.themes.filter(function(q){return q.id===tid;})[0];return x||null;}
  var PROV=[["AB","Alberta","Alberta"],["BC","British Columbia","Colombie-Britannique"],["MB","Manitoba","Manitoba"],["NB","New Brunswick","Nouveau-Brunswick"],["NL","Newfoundland and Labrador","Terre-Neuve-et-Labrador"],["NS","Nova Scotia","Nouvelle-Écosse"],["NT","Northwest Territories","Territoires du Nord-Ouest"],["NU","Nunavut","Nunavut"],["ON","Ontario","Ontario"],["PE","Prince Edward Island","Île-du-Prince-Édouard"],["QC","Quebec","Québec"],["SK","Saskatchewan","Saskatchewan"],["YT","Yukon","Yukon"]];
  function wayById(id){for(var i=0;i<WAYS.length;i++)if(WAYS[i].id===id)return WAYS[i];return null;}
  var cart=[];
  try{var raw=JSON.parse(localStorage.getItem("dalenzo-cart")||"[]");if(Array.isArray(raw))cart=raw.filter(function(l){return l&&PRODUCTS[l.id]&&themeOf(l.id,l.way)&&l.qty>0;});}catch(e){cart=[];}
  function saveCart(){try{localStorage.setItem("dalenzo-cart",JSON.stringify(cart));}catch(e){}}
  function money(n){return new Intl.NumberFormat(lang==="fr"?"fr-CA":"en-CA",{style:"currency",currency:"CAD"}).format(n);}
  function t(k){return T[lang][k]||T.en[k]||k;}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function swatchBg(w){var d=w.dots;return d.length>2?"repeating-linear-gradient(135deg,"+d[0]+" 0 9px,"+d[1]+" 9px 12px,"+d[0]+" 12px 21px,"+d[2]+" 21px 23px)":"repeating-linear-gradient(135deg,"+d[0]+" 0 7px,"+d[1]+" 7px 9px)";}
  var drawer=document.getElementById("drawer"),scrim=document.getElementById("scrim"),cartBtn=document.getElementById("cart-btn"),countEl=document.getElementById("cart-count"),linesEl=document.getElementById("lines"),vBag=document.getElementById("v-bag"),vCo=document.getElementById("v-checkout"),heroAdd=document.getElementById("hero-add"),provSel=document.getElementById("f-prov"),lastFocus=null;
  function subtotal(){return cart.reduce(function(s,l){return s+PRODUCTS[l.id].price*l.qty;},0);}
  function setWayLabels(){var w=wayById(state.wayId);document.querySelectorAll("[data-way-label]").forEach(function(el){el.textContent=w.name;});}
  function renderCart(){
    var n=cart.reduce(function(s,l){return s+l.qty;},0);
    countEl.textContent=n;cartBtn.setAttribute("aria-label",t("bag_btn")+", "+n);
    document.getElementById("d-title").textContent=t(vCo.hidden?"cart_title":"checkout_title");
    if(!cart.length){
      linesEl.innerHTML='<div class="empty"><p>'+esc(t("empty"))+'</p><button class="add" type="button" id="browse">'+esc(t("browse"))+'</button></div>';
      document.getElementById("browse").onclick=function(){closeCart();document.getElementById("straps").scrollIntoView({behavior:reduce?"auto":"smooth"});};
    }else{
      linesEl.innerHTML=cart.map(function(l,i){var w=themeOf(l.id,l.way),p=PRODUCTS[l.id];
        return '<div class="cl"><div class="cl-sw" style="background:'+swatchBg(w)+'"></div><div><h3>'+esc(pname(p))+'</h3><div class="meta">'+esc(w.name)+' · '+esc(money(p.price))+'</div><div><span class="qty"><button type="button" data-dec="'+i+'" aria-label="'+esc(t("qty_dec"))+'">−</button><span>'+l.qty+'</span><button type="button" data-inc="'+i+'" aria-label="'+esc(t("qty_inc"))+'"'+(l.qty>=PER?' disabled title="'+esc(t("max_note"))+'"':'')+'>+</button></span><button class="rm" type="button" data-rm="'+i+'" aria-label="'+esc(t("remove")+" · "+pname(p))+'" title="'+esc(t("remove"))+'"><svg class="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 6L18 18M18 6L6 18"></path></svg></button></div></div><span class="cl-price">'+esc(money(p.price*l.qty))+'</span></div>';}).join("")+'<p class="d-note" style="margin-top:14px">'+esc(t("max_note"))+'</p>';
    }
    var st=money(subtotal());
    document.getElementById("subtotal").textContent=st;document.getElementById("subtotal2").textContent=st;
    var loopOnly=cart.length>0&&!cart.some(function(l){return !PRODUCTS[l.id].addon;});
    document.getElementById("loop-warn").hidden=!loopOnly;
    document.getElementById("to-checkout").disabled=!cart.length||loopOnly;
    document.getElementById("bag-foot").hidden=!cart.length;
    document.getElementById("mini").innerHTML=cart.map(function(l){var w=themeOf(l.id,l.way);return '<div class="mini"><span>'+l.qty+' × '+esc(pname(PRODUCTS[l.id]))+' · '+esc(w.name)+'</span><span class="mono">'+esc(money(PRODUCTS[l.id].price*l.qty))+'</span></div>';}).join("");
    if(state.preview){heroAdd.textContent=t("preview_only");heroAdd.disabled=true;}
    else{heroAdd.textContent=t("add")+" · "+money(PRODUCTS.bag.price);heroAdd.disabled=false;}
    if((!cart.length||loopOnly)&&!vCo.hidden)showView("bag");
  }
  function fillProv(){var cur=provSel.value||"QC";provSel.innerHTML=PROV.map(function(p){return '<option value="'+p[0]+'">'+esc(lang==="fr"?p[2]:p[1])+'</option>';}).join("");provSel.value=cur;}
  function showView(v){vBag.hidden=v!=="bag";vCo.hidden=v!=="checkout";document.getElementById("d-title").textContent=t(v==="bag"?"cart_title":"checkout_title");}
  function openCart(from){lastFocus=from||document.activeElement;showView("bag");drawer.removeAttribute("inert");document.body.classList.add("cart-open");cartBtn.setAttribute("aria-expanded","true");setTimeout(function(){document.getElementById("d-close").focus({preventScroll:true});},80);}
  function closeCart(){document.body.classList.remove("cart-open");drawer.setAttribute("inert","");cartBtn.setAttribute("aria-expanded","false");if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true});}
  function addItem(id,btn){
    var th=(btn&&btn.dataset.theme)||state.wayId;
    var l=null;for(var i=0;i<cart.length;i++)if(cart[i].id===id&&cart[i].way===th)l=cart[i];
    if(l)l.qty=Math.min(PER,l.qty+1);else cart.push({id:id,way:th,qty:1});
    saveCart();renderCart();
    countEl.classList.add("bump");setTimeout(function(){countEl.classList.remove("bump");},300);
    if(btn!==heroAdd){btn.textContent=t("added");setTimeout(function(){btn.textContent=t("add");},1400);}
    openCart(btn);
  }
  document.querySelectorAll("[data-add]").forEach(function(b){b.addEventListener("click",function(){addItem(b.dataset.add,b);});});
  linesEl.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;
    if(b.dataset.inc!=null){var li=cart[+b.dataset.inc];li.qty=Math.min(PER,li.qty+1);}
    else if(b.dataset.dec!=null){var ld=cart[+b.dataset.dec];ld.qty--;if(ld.qty<1)cart.splice(+b.dataset.dec,1);}
    else if(b.dataset.rm!=null)cart.splice(+b.dataset.rm,1);
    else return;
    saveCart();renderCart();});
  cartBtn.addEventListener("click",function(){openCart(cartBtn);});
  document.getElementById("d-close").addEventListener("click",closeCart);
  scrim.addEventListener("click",closeCart);
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&document.body.classList.contains("cart-open"))closeCart();});
  document.getElementById("to-checkout").addEventListener("click",function(){showView("checkout");document.getElementById("co-ok").hidden=true;vCo.querySelector(".d-body").scrollTop=0;});
  document.getElementById("back").addEventListener("click",function(){showView("bag");});
  var FIELDS=[["f-email","e-email"],["f-name","e-name"],["f-addr","e-addr"],["f-city","e-city"],["f-postal","e-postal"]];
  vCo.addEventListener("input",function(e){var er=document.getElementById(e.target.id.replace("f-","e-"));if(er&&er!==e.target){er.textContent="";e.target.setAttribute("aria-invalid","false");}document.getElementById("co-ok").hidden=true;});
  vCo.addEventListener("submit",function(e){
    e.preventDefault();var first=null;
    FIELDS.forEach(function(f){var el=document.getElementById(f[0]),er=document.getElementById(f[1]),v=el.value.trim(),msg="";
      if(!v)msg=t("e_req");
      else if(f[0]==="f-email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))msg=t("e_email");
      else if(f[0]==="f-postal"&&!/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(v))msg=t("e_postal");
      er.textContent=msg;el.setAttribute("aria-invalid",msg?"true":"false");if(msg&&!first)first=el;});
    var ok=document.getElementById("co-ok");
    if(first){ok.hidden=true;first.focus();return;}
    ok.textContent=t("done");ok.hidden=false;
  });
  setWayLabels();

  /* ---- colour library: sourcing studies, preview only (not for sale) ---- */
  var LIB=[
    {title:"Signal",items:[{n:"Balise",a:"#FF5A1F",b:"#2A2C2F"},{n:"Volt",a:"#C8F031",b:"#111111"},{n:"Néon",a:"#FF3D8B",b:"#1E2A44"},{n:"Nuit",a:"#161616",b:"#C9CCD1"},{n:"Électrique",a:"#1F5BFF",b:"#F2F2F0"}]},
    {title:"Saisons",items:[{n:"Érable",a:"#C8371D",b:"#E8A33A"},{n:"Lac",a:"#0E6E73",b:"#7FD6D2"},{n:"Mousse",a:"#3E5A1E",b:"#B6D33A"},{n:"Bouleau",a:"#EFEDE6",b:"#1A1A1A"},{n:"Aurore",a:"#5B3FA8",b:"#F28DB2"}]},
    {title:"Sorbet",items:[{n:"Pêche",a:"#F6B89A",b:"#FFFFFF"},{n:"Lilas",a:"#B9A6E0",b:"#6E6F73"},{n:"Glace",a:"#BFE3F2",b:"#1F5BFF"},{n:"Beurre",a:"#F4DE7A",b:"#FFFFFF"},{n:"Ardoise",a:"#5E6670",b:"#FF7A59"}]},
    {title:"Lot 02",four:true,items:[{n:"Bordeaux",a:"#7A1F33",b:"#F2C14E",c:"#F1E6CC"},{n:"Pervenche",a:"#7FA3E8",b:"#F2A7C3",c:"#4E9A3E"},{n:"Poivre",a:"#1C1C1C",b:"#E01E9B",c:"#7DB7E8"},{n:"Pastèque",a:"#8A9A2E",b:"#F0506E",c:"#EDEFF0"},{n:"Marin",a:"#1C2A55",b:"#1F4FD8",c:"#E2D3B5"},{n:"Raisin",a:"#5B3A9B",b:"#F2B705",c:"#B6E04B"},{n:"Pétrole",a:"#3E6A80",b:"#E6A4B4",c:"#8BD449"},{n:"Brique",a:"#D2352B",b:"#7A55D3",c:"#C9DDA0"}]},
    {key:"lib_tri",four:true,items:[{n:"Sentier",a:"#161616",b:"#FF5A1F",c:"#C9CCD1"},{n:"Carnaval",a:"#EFEDE6",b:"#1F5BFF",c:"#FF3D8B"},{n:"Rivière",a:"#0E6E73",b:"#E8A33A",c:"#EFEDE6"},{n:"Automne",a:"#3E5A1E",b:"#C8371D",c:"#F4DE7A"},{n:"Aurore boréale",a:"#5B3FA8",b:"#C8F031",c:"#F28DB2"},{n:"Marée",a:"#1E2A44",b:"#BFE3F2",c:"#FF7A59"},{n:"Agrume",a:"#F6B89A",b:"#5E6670",c:"#C8F031"},{n:"Granit vif",a:"#5E6670",b:"#EFEDE6",c:"#FF5A1F"}]}
  ];
  var libEl=document.getElementById("lib"),libItems=[];
  libEl.innerHTML=LIB.map(function(g){
    return '<div class="lib-group"><h3'+(g.key?' data-i18n="'+g.key+'"':'')+'>'+esc(g.key?t(g.key):g.title)+'</h3><div class="lib-grid'+(g.four?' four':'')+'">'+g.items.map(function(it){
      var i=libItems.push(it)-1;
      var bg=it.c?"repeating-linear-gradient(135deg,"+it.a+" 0 9px,"+it.b+" 9px 12px,"+it.a+" 12px 21px,"+it.c+" 21px 23px)":"repeating-linear-gradient(135deg,"+it.a+" 0 7px,"+it.b+" 7px 9px)";
      var dots=[it.a,it.b].concat(it.c?[it.c]:[]).map(function(c){return '<i style="background:'+c+'"></i>';}).join("");
      return '<button class="lib-sw" type="button" data-lib="'+i+'" aria-pressed="false"><span class="lib-chip" style="background:'+bg+'"></span><span class="lib-name">'+esc(it.n)+'</span><span class="lib-dots" aria-hidden="true">'+dots+'</span></button>';
    }).join("")+'</div></div>';
  }).join("");
  function setPreview(it){
    state.preview=!!it;
    libEl.querySelectorAll(".lib-sw").forEach(function(b){b.setAttribute("aria-pressed",String(!!it&&libItems[+b.dataset.lib]===it));});
    if(it){
      tweenTo({name:it.n,a:it.a,b:it.b,c:it.c});swName.textContent=it.n;
      row.querySelectorAll(".sw").forEach(function(x){x.setAttribute("aria-checked","false");});
      document.querySelector(".stage").scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"});
    }
    renderCart();
  }
  libEl.addEventListener("click",function(e){var b=e.target.closest(".lib-sw");if(b)setPreview(libItems[+b.dataset.lib]);});

  var saved=null;try{saved=localStorage.getItem("dalenzo-lang")}catch(e){}
  /* Default: the visitor's saved choice, else their browser language, else French (Quebec business). */
  var nav=((navigator.languages&&navigator.languages[0])||navigator.language||"").toLowerCase();
  setLang(saved||(nav.indexOf("en")===0?"en":"fr"));

  var word=document.querySelector(".word"),stP=document.querySelector(".statement p");
  function availOf(box){var cs=getComputedStyle(box);return box.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);}
  function fitWord(){
    var avail=availOf(word.parentElement);
    word.style.fontSize="100px";
    word.style.fontSize=Math.min(220,Math.floor(100*avail/word.scrollWidth*0.995))+"px";
    var a2=availOf(stP.parentElement);
    stP.style.fontSize="100px";
    var widest=Math.max.apply(null,[].map.call(stP.querySelectorAll(".line"),function(s){return s.scrollWidth;}));
    stP.style.fontSize=Math.min(240,Math.floor(100*a2/widest*0.99))+"px";
  }

  /* desktop only: the knot follows the cursor along the hero strap and sets the length */
  var hc=document.getElementById("hero-rope");
  if(window.matchMedia&&matchMedia("(hover:hover) and (pointer:fine)").matches){
    hc.addEventListener("pointermove",function(e){
      if(!heroGeo)return;
      var r=hc.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,P=heroGeo.pts,best=1e12,bi=0;
      for(var i=0;i<P.length;i+=2){var dx=P[i][0]-x,dy=P[i][1]-y,d=dx*dx+dy*dy;if(d<best){best=d;bi=i;}}
      if(best>Math.pow(heroGeo.w*7,2))return;
      var frac=heroGeo.acc[bi]/heroGeo.acc[heroGeo.acc.length-1];
      var len=Math.round(86+Math.max(0,Math.min(1,(frac-.62)/.28))*64);
      if(len!==+lenIn.value){lenIn.value=len;updateLen();tweenLen();}
    });
  }
  function all(){fitWord();render();}
  var raf;window.addEventListener("resize",function(){cancelAnimationFrame(raf);raf=requestAnimationFrame(all);});
  all();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(all);
})();
