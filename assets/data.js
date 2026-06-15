// Shared site data — news, group, sponsors, thrust connections
window.SITE = {

  news: [
    { d:"2026 · 08", t:"<b>$500K Longview Philanthropy award</b> (PI Köse): on-chip voltage regulators as analog sensors for AI workload verification (2026–2029)." },
    { d:"2026 · 07", t:"Selçuk appointed <b>Chair of the Department of Electrical and Computer Engineering</b> at the University of Rochester." },
    { d:"2026 · 05", t:"New <b>CEIS award</b> (PI Köse) toward enabling digital superconducting quantum control; SEEQC covers fabrication of 4+ SFQ test chips." },
    { d:"2026 · 01", t:"New preprint posted to arXiv: <b>Interfacing Superconductor and Semiconductor Digital Electronics</b>, by Yerzhan Mustafa and Selçuk Köse." },
    { d:"2025 · 10", t:"Our paper <b>SKI-SAT: A CMOS-Compatible Hardware for Solving SAT Problems</b> accepted in <i>IEEE TCAS-I</i>, joint work with Bart Selman and Henry Kautz." },
    { d:"2025 · 07", t:"Paper on the <b>Bistable All-Josephson Junction SQUID with Dual Φ-Junctions</b> presented at ISVLSI 2025." },
    { d:"2025 · 05", t:"Three group papers presented at <b>ISCAS 2025</b>, spanning superconductor-semiconductor interfaces, CMOS Ising machines, and pseudo-random number generation." },
    { d:"2025 · 03", t:"Our paper <b>Constraint-Aware Annealing for CMOS-Based Ising Machine LDPC Decoder</b> published in <i>IEEE TCAS-II</i>." },
    { d:"2025 · 03", t:"Paper on <b>contention-based covert channels in shared DRAM</b> presented at DATE 2025, joint work with the Belviranli group." },
    { d:"2024 · 07", t:"Selçuk promoted to <b>full Professor</b> at the University of Rochester." }
  ],

  phd: [
    { i:"YM", n:"Yerzhan Mustafa",  r:"PhD Candidate", f:"Cryogenic SFQ logic, Suzuki stack circuits, and Josephson-CMOS memory interfaces.", fl:"kz", fln:"Kazakhstan", ph:"assets/photos/yerzhan-mustafa.jpg" },
    { i:"AA", n:"Ayisat Adedokun",  r:"PhD Candidate", f:"Hardware security of SFQ circuits and side-channel countermeasures.", fl:"ng", fln:"Nigeria", ph:"assets/photos/ayisat-adedokun.jpg" },
    { i:"AS", n:"Ahmet Yusuf Salim",r:"PhD Candidate", f:"CMOS-based Ising machines and pseudo-random number generation.", fl:"tr", fln:"Türkiye", ph:"assets/photos/ahmet-yusuf-salim.png" },
    { i:"İZ", n:"İrem Zengin",       r:"PhD Student",   f:"Hardware security with a focus on GPUs and AI accelerators.", fl:"tr", fln:"Türkiye", ph:"assets/photos/irem-zengin.jpg" },
    { i:"GK", n:"Gulnur Kulzhanova",r:"PhD Student",   f:"Superconducting electronics and security of quantum computers.", fl:"kz", fln:"Kazakhstan", ph:"assets/photos/gulnur.jpg" }
  ],

  ug: [
    { n:"Weiting Tan",        fl:"cn", fln:"China" },
    { n:"Ali Salem",          fl:"us", fln:"United States" },
    { n:"Jiaxuan Zhu",        fl:"cn", fln:"China" },
    { n:"Gurami Mgebrishvili",fl:"ge", fln:"Georgia" },
    { n:"Jack Rochkind",      fl:"us", fln:"United States" }
  ],

  alumniPhD: [
    { n:"Soner Seçkiner",   nx:"Qualcomm", y:"2025" },
    { n:"Eslam Elmitwalli", nx:"Intel", y:"2024" },
    { n:"Berker Pekoz",     nx:"Embry-Riddle Aero. Univ. (faculty)", y:"2020" },
    { n:"Longfei Wang",     nx:"Qualcomm", y:"2018" },
    { n:"Mahmood Azhar",    nx:"South Florida State College", y:"2018" },
    { n:"Weize Yu",         nx:"Shandong University, China (faculty)", y:"2017" },
    { n:"Orhun Aras Uzun",  nx:"Cirrus Logic", y:"2017" }
  ],
  alumniMS: [
    { n:"Rose McDonogh",     nx:"Sandia National Labs", y:"2022" },
    { n:"Haotian Dai",       nx:"PhD student, Rice University", y:"2021" },
    { n:"Ahmed Waheed Khan", nx:"Flex Electronics", y:"2018" },
    { n:"Tanya Wanchoo",     nx:"Intel Corporation", y:"2016" }
  ],

  sponsors: [
    { n:"NSF",        k:"Federal · CAREER" },
    { n:"DOE",        k:"Federal" },
    { n:"DARPA",      k:"Federal" },
    { n:"SRC",        k:"Consortium" },
    { n:"NSF / SRC",  k:"SaTC · STARSS" },
    { n:"Cisco",      k:"Industry · 2015–17" },
    { n:"CEIS",       k:"Rochester · Industry" },
    { n:"SEEQC",      k:"Industry" },
    { n:"Longview",   k:"Philanthropy · 2026" }
  ],

  gallery: [
    { src:"assets/photos/lunch-2026-05.jpg", cap:"Group lunch",    d:"May 2026" },
    { src:"assets/photos/lunch-2025-09.jpg", cap:"Lakeside lunch", d:"September 2025" },
    { src:"assets/photos/lunch-2024-10.jpg", cap:"Group dinner",   d:"October 2024" }
  ],

  thrusts: [
    { id:"hwsec",  label:"Hardware Security",           x:250, y:80,  href:"research/hardware-security.html" },
    { id:"power",  label:"Power Delivery",              x:455, y:215, href:"research/power-delivery.html" },
    { id:"super",  label:"Superconducting Electronics", x:375, y:400, href:"research/superconducting.html" },
    { id:"ising",  label:"CMOS Ising",                  x:125, y:400, href:"research/ising.html" },
    { id:"quant",  label:"Quantum Computing",           x:45,  y:215, href:"research/quantum.html" }
  ],

  thrustDetail: {
    hwsec: {
      title:"Hardware Security",
      desc:"The mother thrust — side-channel, fault-injection, PUFs, TRNGs, Trojans. Touches every other area in the lab.",
      edges:[
        { to:"power", proj:"Voltage-regulator-aided side-channel countermeasures",  ven:"IEEE TVLSI / DAC" },
        { to:"super", proj:"Side-channel leakage in SFQ logic & BIST methods",      ven:"IEEE TVLSI '24" },
        { to:"ising", proj:"Ising-machine-based PUF and TRNG primitives",           ven:"ISCAS '25" },
        { to:"quant", proj:"Side-channels in classical-quantum readout chains",     ven:"ISCAS '24" }
      ]
    },
    power: {
      title:"On-Chip Power Delivery",
      desc:"Where energy efficiency meets security. Distributed regulators, switched-cap converters, 3-D PDNs.",
      edges:[
        { to:"hwsec", proj:"Voltage-regulator-aided side-channel countermeasures",  ven:"IEEE TVLSI / DAC" },
        { to:"super", proj:"Cryogenic power conditioning for SFQ stages",           ven:"In progress" },
        { to:"ising", proj:"Power-aware annealing schedules for CMOS Ising arrays", ven:"TCAS-II '25" }
      ]
    },
    super: {
      title:"Superconducting Electronics",
      desc:"SFQ logic, Suzuki stack circuits, Josephson-CMOS interfaces — the bridge to quantum hardware.",
      edges:[
        { to:"hwsec", proj:"Side-channel leakage in SFQ logic & BIST methods",      ven:"IEEE TVLSI '24" },
        { to:"power", proj:"Cryogenic power conditioning for SFQ stages",           ven:"In progress" },
        { to:"quant", proj:"Superconductive control electronics for qubits",        ven:"arXiv '26" }
      ]
    },
    ising: {
      title:"CMOS Ising Machines",
      desc:"Physics-inspired combinatorial optimization. Injection-locked oscillators, multi-body interactions, LDPC.",
      edges:[
        { to:"hwsec", proj:"Ising-machine-based PUF and TRNG primitives",           ven:"ISCAS '25" },
        { to:"power", proj:"Power-aware annealing schedules for CMOS Ising arrays", ven:"TCAS-II '25" },
        { to:"quant", proj:"Classical Ising solvers as quantum benchmarks",         ven:"Joint w/ Selman & Kautz" }
      ]
    },
    quant: {
      title:"Quantum Computing",
      desc:"Security and reliability of the classical-quantum interface. Where every other thrust converges.",
      edges:[
        { to:"hwsec", proj:"Side-channels in classical-quantum readout chains",     ven:"ISCAS '24" },
        { to:"super", proj:"Superconductive control electronics for qubits",        ven:"arXiv '26" },
        { to:"ising", proj:"Classical Ising solvers as quantum benchmarks",         ven:"Joint w/ Selman & Kautz" }
      ]
    }
  },

  thrustLabels: {
    hwsec:"Hardware Security",
    power:"Power Delivery",
    super:"Superconducting Electronics",
    ising:"CMOS Ising",
    quant:"Quantum"
  }
};
