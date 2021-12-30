if(!window.AWSC){AWSC={}}AWSC.PanoramaTrackerInit=(function(){var a=function(){var S="awsc-panorama";try{window.localStorage.setItem(S,S);window.localStorage.removeItem(S);return true}catch(T){return false}};var B=function(){try{return window.performance.now()!==0}catch(S){return false}};var D="/panoramaroute/allowlist",w="global.prod.pw.analytics.console.aws.a2z.com",d=".prod.pr.analytics.console.aws.a2z.com",z="us-east-1",G=1,P="web",A=/alpha|beta|gamma|integ|preprod|pre-prod/i,u="panorama",c="aws.amazon.com",R="1",p="console.aws.amazon.com",J="0",g=w+D,y=p+D,t="awsc_panorama_lastChecked_",Q="awsc_panorama_preference_",K=1000,L=undefined,k=20000,E=undefined,H="",I=1000*60*5,r=undefined,s=a(),j=B(),n=function(){return undefined},F=0,b=0;if(window.AWSC&&window.AWSC.Clog&&window.AWSC.Clog.log){n=window.AWSC.Clog.log}var h=(function q(){var e=window.location.hostname,S;switch(true){case A.test(e):S="NonProd";break;case e.indexOf(c)!==-1:S="Prod";break;default:S="NonProd";break}return S})();if(h==="NonProd"&&window.disablePanorama){return}var m=function(T){try{var S=document.createEvent("CustomEvent");S.initCustomEvent("onPanoramaLoad",true,true,{enabled:T});window.dispatchEvent(S);if(!T){window.panorama=function(){console.warn("Panorama is not enabled; events will not be emitted.");return undefined};window.panorama.enabled=false;window.AWSC.Clog.bufferedQueue=[]}}catch(U){n("dispatchPanoramaLoadError",1)}};var C=function(Y,U,Z,X,W){if(s){try{r=JSON.parse(window.localStorage.getItem(t+Y))}catch(V){r=null}if(r&&Date.now()-r<I){m(false);return}else{if(r&&Date.now()-r>I){window.localStorage.removeItem(t+Y);window.localStorage.removeItem(Q+Y)}}}var S="https://"+W+"?modality="+Z+"&identifier="+U+"&region="+Y;var aa=Boolean(window.location.href.indexOf("panoramaEnabled")!==-1);var ab=new XMLHttpRequest();ab.open("GET",S,true);ab.onreadystatechange=function(){if(ab.readyState===4&&ab.status===200){n("panoALSuccessful",1);let panoALLatency;if(j){try{let perf=performance.getEntriesByName(S,"resource")[0];panoALLatency=Math.round(perf.responseEnd-perf.startTime)}catch(ae){n({key:"panoALPerfError",value:1});j=0;panoALLatency=Date.now()-T}}else{panoALLatency=Date.now()-T}n({key:"panoALSuccessLatency",value:panoALLatency,detail:JSON.stringify({requestUrl:W,isPerformanceAvailable:j}),unit:"ms"});var ac=JSON.parse(ab.response);if(ac.isPanoramaAllowed){n("panoALTrue",1)}if(ac.isPanoramaAllowed||aa){var ad={};if(ac.trackerConfig){try{ad=JSON.parse(ac.trackerConfig)}catch(ae){n({key:"panoALParseError",value:1})}}if(ad.trackerUrl&&(ad.trackerUrlRatio||1)>Math.random()){X=ad.trackerUrl}if(ad.disablePhantom&&!!window.callPhantom){return}x(Z,Y,window,document,"script",X,u,null,null,ad)}else{m(false);n("panoALFalse",1)}}else{if(ab.readyState===4&&(ab.status>=400||ab.status===0)){n({key:"panoALFailureLatency",value:Date.now()-T,unit:"ms"});if(F<G){F++;if(F===1){n({key:"anyPanoALFail",value:1,detail:ab.status})}ab.abort();L=Y+"."+y;setTimeout(function(){C(Y,U,Z,i,L)},K)}else{window.AWSC.Clog.bufferedQueue=[];n("panoZeroRetriesLeft",1);if(s){window.localStorage.setItem(t+Y,Date.now())}m(false)}}}if(ab.readyState===4&&(ab.status===200||F>=G)){n({key:"totalPanoALRetries",value:F});if(s){if(L===g){window.localStorage.setItem(Q+Y,"0;"+Date.now())}else{if(L===Y+"."+y){window.localStorage.setItem(Q+Y,"1;"+Date.now())}}}}};ab.ontimeout=function(){b++;n("panoALTimeoutExceeded",b)};ab.timeout=k;var T=Date.now();ab.send();if(F===0){n("anyPanoALSent",1)}return false};var x=function(W,e,S,X,T,ab,Z,V,aa,Y){if(!S[Z]){S.GlobalSnowplowNamespace=S.GlobalSnowplowNamespace||[];S.GlobalSnowplowNamespace.push(Z);S[Z]=function(){(S[Z].q=S[Z].q||[]).push(arguments)};S[Z].loadTime=Date.now();S[Z].enabled=true;S[Z].q=S[Z].q||[];S[Z].trackCustomEvent=function(){[].unshift.call(arguments,"trackCustomEvent");S[Z].apply(this,arguments)};V=X.createElement(T);aa=X.getElementsByTagName(T)[0];V.onload=function(){m(true)};V.onerror=function(){m(false)};V.async=1;V.src=ab;aa.parentNode.insertBefore(V,aa)}var U={appId:"aws-console",console:true,trackerConstants:{whitelist:false,cookieDomain:"amazon.com",pluginsEnabledByDefault:true,modality:W}};for(var ac in Y){if(Y.hasOwnProperty(ac)&&!U[ac]){U[ac]=Y[ac]}}if(L===e+"."+y){H=""}else{H="//"+e+d}window.panorama("newTracker","cf",H,U)};n("panoInitLoad",1);if(AWSC.NavFAC){AWSC.NavFAC.loadFeatures();if(AWSC.NavFAC.isFeatureEnabled(u)&&ConsoleNavService&&ConsoleNavService.Model){var O=ConsoleNavService.Model.currentRegionId||z,f=ConsoleNavService.Model.currentService.id,M=P,i=document.getElementById("awsc-panorama-bundle").getAttribute("data-url");try{var l=window.localStorage.getItem(Q+O);var v=l.split(";");E=v[0];var o=parseInt(v[1],10);if(o&&Date.now()-o<I*3){if(E===R){H="";L=O+"."+y}else{H="//"+O+d;L=g}}else{if(o&&Date.now()-o>I*3){localStorage.removeItem(Q+O);E=J;L=g}}}catch(N){E=undefined;L=g}C(O,f,M,i,L)}else{if(!AWSC.NavFAC.isFeatureEnabled(u)){n("panoFacDisabled",1)}else{n("panoConsoleNavServiceModelMissing",1)}m(false)}}else{n("panoFacUnavailable",1);m(false)}})();