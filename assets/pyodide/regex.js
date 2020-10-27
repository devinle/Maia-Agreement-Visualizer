var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="regex.data";var REMOTE_PACKAGE_BASE="regex.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","regex",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:525081,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1228,2260,3471,4632,5619,6597,7691,8492,9367,10010,10974,12114,13117,14247,15291,16440,17669,18532,19502,20594,21640,22693,23837,25115,25914,26736,27137,27986,28757,29381,30146,30873,31649,32211,32871,33499,34118,34629,35282,36038,36978,38147,39004,39803,40488,41387,41771,42098,42779,43300,44112,44663,45282,45958,46511,47264,47833,48584,49529,50126,50663,51261,51825,52575,53513,54346,54971,55683,56516,57344,58013,58699,59462,60305,60769,61476,62215,63046,64014,65063,66083,67062,68034,68940,69631,70368,70895,71860,72484,73292,74036,74858,75524,76307,76908,77405,78160,79022,79801,80727,81654,82922,83643,84243,85328,85831,86360,87265,88233,88854,89527,90666,91476,92353,93432,94345,95027,95610,96368,96784,97234,98502,99426,99822,100166,101126,102382,103587,104922,106121,107332,108480,109661,110750,112085,112713,113248,113831,114368,114791,115236,116015,117182,118459,119728,121296,122348,123692,124720,126070,127531,128561,129764,130825,131965,132890,133202,133951,134787,135729,136716,137648,138626,139519,140462,141597,142860,144083,145163,146473,147603,148577,149980,151227,152282,153513,154859,155782,156372,157088,157763,158561,159390,160494,161397,162271,163159,163846,164018,165110,166395,167568,168852,169903,170864,171692,172412,173605,174773,175696,176599,177507,178723,179787,180887,181851,182973,183772,184730,185771,186865,188124,188590,188924,189557,189899,190334,190513,190551,191371,192458,192899,193308,193933,194614,195363,196244,197535,198295,199398,200543,201452,202730,203823,205178,206251,207595,208429,209099,210332,211266,212162,213594,214294,214630,215533,216335,217256,218070,218957,219739,220843,221698,222843,223680,224597,225289,225639,226287,226837,227269,228224,228528,229566,229919,230311,231217,232059,233254,234262,235055,236243,237282,238165,238762,239574,240042,241369,242249,243309,244106,244844,245414,246205,247019,248128,248683,249719,250899,252213,253227,254012,254999,255997,257112,258279,259378,260711,262036,263295,264562,265700,266493,267284,268206,269265,270683,272138,273182,274190,275251,276301,277356,278403,279458,280520,281579,282631,283691,284752,285803,286864,287927,288988,290037,291099,292157,293217,294266,295325,295895,296639,297051,297832,298670,299662,300449,300499,300524,300835,302716,304637,306392,308281,310047,311349,312837,314154,315610,317124,318488,320100,321546,322707,323957,325086,326288,327332,328644,329763,331227,332067,333486,334664,335713,336981,337980,338952,340028,341422,342680,343807,345063,346048,346900,348100,349150,350390,351614,352998,353896,354753,355568,356503,357706,358972,359944,361365,362535,363923,365315,366774,368426,369928,371683,373011,374354,375852,377454,378930,380182,381245,382224,383376,384208,385552,386675,387706,388638,389590,390768,391709,392681,393480,394660,395752,396453,397403,397862,398890,399776,400429,401144,401316,402604,403552,404405,405966,407529,408986,410131,411175,411993,412934,414109,415206,416041,416733,417697,418910,419966,421213,422381,423044,423835,425186,426706,428e3,429378,430830,432111,433737,435176,436612,438024,439357,440726,441942,442944,443643,444691,445723,446609,447623,448650,449656,450654,451527,452636,453714,454748,455742,456772,457920,458713,459787,461050,461995,463098,464358,465447,466321,467340,468310,469318,470286,471181,472119,473289,474392,475535,476477,477406,478361,479464,480433,481437,482426,483461,484318,485318,486369,487506,488572,489478,490510,491574,492715,493670,494554,495409,496429,497444,498531,499624,500390,501122,502065,503224,504356,505581,506797,508276,509281,510498,511678,512717,514093,515474,516279,517239,518271,519454,520645,521749,523070,524398],sizes:[1228,1032,1211,1161,987,978,1094,801,875,643,964,1140,1003,1130,1044,1149,1229,863,970,1092,1046,1053,1144,1278,799,822,401,849,771,624,765,727,776,562,660,628,619,511,653,756,940,1169,857,799,685,899,384,327,681,521,812,551,619,676,553,753,569,751,945,597,537,598,564,750,938,833,625,712,833,828,669,686,763,843,464,707,739,831,968,1049,1020,979,972,906,691,737,527,965,624,808,744,822,666,783,601,497,755,862,779,926,927,1268,721,600,1085,503,529,905,968,621,673,1139,810,877,1079,913,682,583,758,416,450,1268,924,396,344,960,1256,1205,1335,1199,1211,1148,1181,1089,1335,628,535,583,537,423,445,779,1167,1277,1269,1568,1052,1344,1028,1350,1461,1030,1203,1061,1140,925,312,749,836,942,987,932,978,893,943,1135,1263,1223,1080,1310,1130,974,1403,1247,1055,1231,1346,923,590,716,675,798,829,1104,903,874,888,687,172,1092,1285,1173,1284,1051,961,828,720,1193,1168,923,903,908,1216,1064,1100,964,1122,799,958,1041,1094,1259,466,334,633,342,435,179,38,820,1087,441,409,625,681,749,881,1291,760,1103,1145,909,1278,1093,1355,1073,1344,834,670,1233,934,896,1432,700,336,903,802,921,814,887,782,1104,855,1145,837,917,692,350,648,550,432,955,304,1038,353,392,906,842,1195,1008,793,1188,1039,883,597,812,468,1327,880,1060,797,738,570,791,814,1109,555,1036,1180,1314,1014,785,987,998,1115,1167,1099,1333,1325,1259,1267,1138,793,791,922,1059,1418,1455,1044,1008,1061,1050,1055,1047,1055,1062,1059,1052,1060,1061,1051,1061,1063,1061,1049,1062,1058,1060,1049,1059,570,744,412,781,838,992,787,50,25,311,1881,1921,1755,1889,1766,1302,1488,1317,1456,1514,1364,1612,1446,1161,1250,1129,1202,1044,1312,1119,1464,840,1419,1178,1049,1268,999,972,1076,1394,1258,1127,1256,985,852,1200,1050,1240,1224,1384,898,857,815,935,1203,1266,972,1421,1170,1388,1392,1459,1652,1502,1755,1328,1343,1498,1602,1476,1252,1063,979,1152,832,1344,1123,1031,932,952,1178,941,972,799,1180,1092,701,950,459,1028,886,653,715,172,1288,948,853,1561,1563,1457,1145,1044,818,941,1175,1097,835,692,964,1213,1056,1247,1168,663,791,1351,1520,1294,1378,1452,1281,1626,1439,1436,1412,1333,1369,1216,1002,699,1048,1032,886,1014,1027,1006,998,873,1109,1078,1034,994,1030,1148,793,1074,1263,945,1103,1260,1089,874,1019,970,1008,968,895,938,1170,1103,1143,942,929,955,1103,969,1004,989,1035,857,1e3,1051,1137,1066,906,1032,1064,1141,955,884,855,1020,1015,1087,1093,766,732,943,1159,1132,1225,1216,1479,1005,1217,1180,1039,1376,1381,805,960,1032,1183,1191,1104,1321,1328,683],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_regex.data")}Module["addRunDependency"]("datafile_regex.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/regex-2019.11.1-py3.7.egg-info",start:0,end:46644,audio:0},{filename:"/lib/python3.7/site-packages/regex/test_regex.py",start:46644,end:257713,audio:0},{filename:"/lib/python3.7/site-packages/regex/_regex.so",start:257713,end:927708,audio:0},{filename:"/lib/python3.7/site-packages/regex/_regex_core.py",start:927708,end:1069686,audio:0},{filename:"/lib/python3.7/site-packages/regex/__init__.py",start:1069686,end:1069751,audio:0},{filename:"/lib/python3.7/site-packages/regex/regex.py",start:1069751,end:1100849,audio:0}],remote_package_size:529177,package_uuid:"f53c22ea-0c4a-41c8-8960-5e8282d6ba42"})})();