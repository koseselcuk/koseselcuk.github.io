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
    { i:"YM", n:"Yerzhan Mustafa",  r:"PhD Candidate", f:"Cryogenic SFQ logic, Suzuki stack circuits, and Josephson-CMOS memory interfaces.", fl:"kz", fln:"Kazakhstan" },
    { i:"AA", n:"Ayisat Adedokun",  r:"PhD Candidate", f:"Hardware security of SFQ circuits and side-channel countermeasures.", fl:"ng", fln:"Nigeria" },
    { i:"AS", n:"Ahmet Yusuf Salim",r:"PhD Candidate", f:"CMOS-based Ising machines and pseudo-random number generation.", fl:"tr", fln:"Türkiye" },
    { i:"İZ", n:"İrem Zengin",       r:"PhD Student",   f:"Hardware security with a focus on GPUs and AI accelerators.", fl:"tr", fln:"Türkiye" },
    { i:"GK", n:"Gulnur Kulzhanova",r:"PhD Student",   f:"Superconducting electronics and security of quantum computers.", fl:"kz", fln:"Kazakhstan" }
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

  // Group photos — life in the lab
  gallery: [
    { src:"assets/photos/lunch-2026-05.jpg", cap:"Group lunch",    d:"May 2026" },
    { src:"assets/photos/lunch-2025-09.jpg", cap:"Lakeside lunch", d:"September 2025" },
    { src:"assets/photos/lunch-2024-10.jpg", cap:"Group dinner",   d:"October 2024" }
  ],

  // Thrust nodes — positioned on a pentagon
  thrusts: [
    { id:"hwsec",  label:"Hardware Security",        x:250, y:80,  href:"research/hardware-security.html" },
    { id:"power",  label:"Power Delivery",           x:455, y:215, href:"research/power-delivery.html" },
    { id:"super",  label:"Superconducting Electronics", x:375, y:400, href:"research/superconducting.html" },
    { id:"ising",  label:"CMOS Ising",               x:125, y:400, href:"research/ising.html" },
    { id:"quant",  label:"Quantum Computing",        x:45,  y:215, href:"research/quantum.html" }
  ],

  // Each thrust: which others it connects to, and 2-3 projects at each intersection
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

  // Full bibliography — every published journal & conference paper from the CV (under-review excluded)
  publications: [
    { y:2026, t:"Reed-Muller Error-Correction Code Encoder for SFQ-to-CMOS Interface Circuits", a:"Y. Mustafa, B. Peköz, S. Köse", v:"IEEE TAS", k:"journal", thrusts:["super"] },
    { y:2026, t:"System-Level Comparison of Superconductor-Semiconductor Interface Circuits", a:"K. Krause, Y. Mustafa, A. Shah, C. Lewis, C. C. Tillman, T. Renduchintala, M. Li, S. Razmkhah, M. C. Hamilton, M. Annavaram, S. Köse, M. Pedram", v:"IEEE TAS", k:"journal", thrusts:["super"] },
    { y:2026, t:"Compromising Qubit Control in Quantum Computing via Hardware Trojans in Multitone Generators", a:"A. Adedokun, Y. Mustafa, S. Köse", v:"Quantum Sci. Technol.", k:"journal", thrusts:["quant","hwsec"] },
    { y:2025, t:"SKI-SAT: A CMOS-Compatible Hardware for Solving SAT Problems", a:"A. Y. Salim, B. Selman, H. Kautz, Z. Ignjatovic, S. Köse", v:"IEEE TCAS-I", k:"journal", thrusts:["ising"] },
    { y:2025, t:"Hardware Trojans in Superconducting Electronic Circuits", a:"A. Adedokun, Y. Mustafa, S. Köse", v:"Supercond. Sci. Technol.", k:"journal", thrusts:["super","hwsec"] },
    { y:2025, t:"Constraint-Aware Annealing for CMOS-Based Ising Machine LDPC Decoder", a:"E. Elmitwalli, Z. Ignjatovic, S. Köse", v:"IEEE TCAS-II", k:"journal", thrusts:["ising","power"] },
    { y:2025, t:"Ternary Digital Output Data Link from SFQ Circuits", a:"Y. Mustafa, S. Köse", v:"IEEE TAS", k:"journal", thrusts:["super"] },
    { y:2025, t:"Signal Integrity Simulations of 4JL Gate Pulses from 4 K to 50 K", a:"K. Krause, Y. Mustafa, A. Shah, S. Köse, M. C. Hamilton", v:"IEEE TAS", k:"journal", thrusts:["super"] },
    { y:2024, t:"Hardware Security Attack Landscape and Countermeasures", a:"N. N. Anandakumar, M. Janke, J. Knechtel, X. Zhao, K.-S. Chong, S. Köse, B.-H. Gwee, J. Chang, L. Paul, Y. Wang", v:"Invited Review", k:"journal", thrusts:["hwsec"] },
    { y:2024, t:"A Methodology to Distribute On-Chip Voltage Regulators to Improve the Security of Hardware Masking", a:"S. Seçkiner, S. Köse", v:"Information", k:"journal", thrusts:["power","hwsec"] },
    { y:2024, t:"DC-biased Suzuki Stack Circuit for Josephson-CMOS Memory Applications", a:"Y. Mustafa, K. Krause, A. Shah, M. C. Hamilton, S. Köse", v:"Supercond. Sci. Technol.", k:"journal", thrusts:["super"] },
    { y:2024, t:"Built-in Self-test of SFQ Circuits Using Side-channel Leakage Information", a:"Y. Mustafa, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["super","hwsec"] },
    { y:2024, t:"A Low-Overhead and High-reliability Physical Unclonable Function (PUF) for Cryptography", a:"W. Liu, J. Cheng, N. Sun, H. Sha, M. Jin, H. Zhao, Z. Pan, J. Wang, S. Köse, W. Yu", v:"Integration", k:"journal", thrusts:["hwsec"] },
    { y:2024, t:"A Novel SM4 Cryptographic Architecture against Higher Order Power Analysis Attacks", a:"N. Sun, W. Liu, J. Cheng, et al., S. Köse, W. Yu", v:"Int. J. Circuit Theory Appl.", k:"journal", thrusts:["hwsec","power"] },
    { y:2024, t:"Utilizing Multi-Body Interactions in a CMOS-Based Ising Machine for LDPC Decoding", a:"E. Elmitwalli, Z. Ignjatovic, S. Köse", v:"IEEE TCAS-I", k:"journal", thrusts:["ising"] },
    { y:2023, t:"Side-Channel Leakage in SFQ Circuits and Related Attacks on Qubit Control and Readout Systems", a:"Y. Mustafa, S. Köse", v:"IEEE TAS", k:"journal", thrusts:["quant","super","hwsec"] },
    { y:2023, t:"Bistable Josephson Junction based True Random Number Generator without Inductors", a:"E. Elmitwalli, S. Köse", v:"IEEE TCAS-II", k:"journal", thrusts:["super","hwsec"] },
    { y:2023, t:"Suzuki Stack Circuit with Differential Output", a:"Y. Mustafa, S. Köse", v:"IEEE TAS", k:"journal", thrusts:["super"] },
    { y:2023, t:"Neural Network-Based Entropy: A New Metric for Evaluating Side-Channel Attacks", a:"J. Cheng, N. Sun, W. Liu, et al., S. Köse, W. Yu", v:"J. Circuits Syst. Comput.", k:"journal", thrusts:["hwsec"] },
    { y:2022, t:"Optimization of Suzuki Stack Circuit to Reduce Power Dissipation", a:"Y. Mustafa, S. Köse", v:"IEEE TAS", k:"journal", thrusts:["super"] },
    { y:2022, t:"Exploiting On-chip Voltage Regulators for Leakage Reduction in Hardware Masking", a:"S. Seçkiner, S. Köse", v:"Sensors", k:"journal", thrusts:["power","hwsec"] },
    { y:2022, t:"Machine Learning Attack Resistant Area-Efficient Reconfigurable Ising-PUF", a:"E. Elmitwalli, K. Ni, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["ising","hwsec"] },
    { y:2022, t:"Emerging Attacks on Logic Locking in SFQ Circuits and Related Countermeasures", a:"Y. Mustafa, T. Jabbari, S. Köse", v:"IEEE TAS", k:"journal", thrusts:["hwsec","super"] },
    { y:2021, t:"Preprocessing of the Physical Leakage Information to Combine Side-Channel Distinguishers", a:"S. Seçkiner, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["hwsec"] },
    { y:2021, t:"A PVT Tolerant True Random Number Generator based on Oscillator Phase under Sub-Harmonic Injection Locking", a:"E. Elmitwalli, K. Ni, S. Köse", v:"IEEE Access", k:"journal", thrusts:["hwsec","ising"] },
    { y:2021, t:"Enhancing the Performance of Lightweight Configurable PUF for Robust IoT Hardware-Assisted Security", a:"F. Amsaad, A. Oun, M. Y. Niamat, A. Razaque, S. Köse, M. Mahmoud, W. Alasmary, F. Alsolami", v:"IEEE Access", k:"journal", thrusts:["hwsec"] },
    { y:2021, t:"A Secure Lightweight Hardware-assisted Charging Coordination Authentication Framework for Trusted Smart Grid Energy Storage Units", a:"F. Amsaad, S. Köse", v:"Springer Nature CS", k:"journal", thrusts:["hwsec"] },
    { y:2021, t:"A Secure Hardware-Assisted AMI Authentication Scheme for Smart Cities", a:"F. Amsaad, S. Köse", v:"IEEE Consum. Electron. Mag.", k:"journal", thrusts:["hwsec"] },
    { y:2020, t:"Reducing Precoder/Channel Mismatch and Enhancing Secrecy in Practical MIMO Systems Using Artificial Signals", a:"B. Peköz, M. Hafez, S. Köse, H. Arslan", v:"IEEE Commun. Lett.", k:"journal", thrusts:[] },
    { y:2020, t:"Extensionless Adaptive Transmitter and Receiver Windowing of Beyond 5G Frames", a:"B. Peköz, S. Köse, H. Arslan", v:"IEEE TVT", k:"journal", thrusts:[] },
    { y:2020, t:"Non-Redundant OFDM Receiver Windowing for 5G Frames and Beyond", a:"B. Peköz, Z. E. Ankaralı, S. Köse, H. Arslan", v:"IEEE TVT", k:"journal", thrusts:[] },
    { y:2019, t:"FOPAC: Flexible On-Chip Power and Clock", a:"R. Kuttappa, S. Köse, B. Taskin", v:"IEEE TCAS-I", k:"journal", thrusts:["power"] },
    { y:2019, t:"Innovative Telecommunications Training through Flexible Radio Platforms", a:"A. F. Demir, B. Peköz, S. Köse, H. Arslan", v:"IEEE Commun. Mag.", k:"journal", thrusts:[] },
    { y:2019, t:"Exploring On-Chip Power Delivery Network Induced Analog Covert Channels", a:"L. Wang, S. K. Khatamifard, U. R. Karpuzcu, S. Köse", v:"IEEE TCPS", k:"journal", thrusts:["power","hwsec"] },
    { y:2019, t:"Exploiting Algorithmic Noise Tolerance for Scalable On-Chip Voltage Regulation", a:"L. Wang, S. K. Khatamifard, U. R. Karpuzcu, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["power"] },
    { y:2018, t:"A New Class of Covert Channels Exploiting Power Management Vulnerabilities", a:"S. K. Khatamifard, L. Wang, S. Köse, U. R. Karpuzcu", v:"IEEE CAL", k:"journal", thrusts:["power","hwsec"] },
    { y:2018, t:"Exploiting Multi-Phase On-Chip Voltage Regulators as Strong PUF Primitives for Securing IoT", a:"W. Yu, Y. Chen, S. Köse, J. Chen", v:"J. Electron. Test.", k:"journal", thrusts:["power","hwsec"] },
    { y:2018, t:"Duty Cycle-based Controlled Physical Unclonable Function", a:"M. Azhar, F. Amsaad, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["hwsec"] },
    { y:2018, t:"Reliable Delay based Algorithm to Boost PUF Security against Modeling Attacks", a:"F. Amsaad, M. Niamat, A. Dawoud, S. Köse", v:"Information", k:"journal", thrusts:["hwsec"] },
    { y:2018, t:"Exploiting Voltage Regulators to Enhance Various Power Attack Countermeasures", a:"W. Yu, S. Köse", v:"IEEE TETC", k:"journal", thrusts:["power","hwsec"] },
    { y:2018, t:"Optimal Allocation of LDOs and Decoupling Capacitors within a Distributed On-Chip Power Grid", a:"S. A. Sadat, M. Canbolat, S. Köse", v:"ACM TODAES", k:"journal", thrusts:["power"] },
    { y:2017, t:"Cognitive Security of Wireless Communication Systems in the Physical Layer", a:"M. H. Yilmaz, E. Guvenkaya, H. M. Furqan, S. Köse, H. Arslan", v:"Wirel. Commun. Mob. Comput.", k:"journal", thrusts:[] },
    { y:2017, t:"Partially Overlapping Filtered Multitone with Reconfigurable Antennas in Uncoordinated Networks", a:"M. H. Yilmaz, S. Köse, N. Chamok, M. Ali, H. Arslan", v:"Phys. Commun.", k:"journal", thrusts:[] },
    { y:2017, t:"False Key-Controlled Aggressive Voltage Scaling: A Countermeasure Against LPA Attacks", a:"W. Yu, S. Köse", v:"IEEE TCAD", k:"journal", thrusts:["power","hwsec"] },
    { y:2017, t:"Efficiency, Stability, and Reliability Implications of Unbalanced Current Sharing among Distributed On-Chip Voltage Regulators", a:"L. Wang, S. K. Khatamifard, O. A. Uzun, U. R. Karpuzcu, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["power"] },
    { y:2017, t:"A Lightweight Masked AES Implementation for Securing IoT Against CPA Attacks", a:"W. Yu, S. Köse", v:"IEEE TCAS-I", k:"journal", thrusts:["hwsec"] },
    { y:2017, t:"Security-Adaptive Voltage Conversion as a Lightweight Countermeasure Against LPA Attacks", a:"W. Yu, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["power","hwsec"] },
    { y:2016, t:"A Voltage Regulator-Assisted Lightweight AES Implementation Against DPA Attacks", a:"W. Yu, S. Köse", v:"IEEE TCAS-I", k:"journal", thrusts:["power","hwsec"] },
    { y:2016, t:"Charge-Withheld Converter-Reshuffling (CoRe): A Countermeasure Against Power Analysis Attacks", a:"W. Yu, S. Köse", v:"IEEE TCAS-II", k:"journal", thrusts:["power","hwsec"] },
    { y:2016, t:"Security Implications of Simultaneous Dynamic and Leakage Power Analysis Attacks on Nanoscale Cryptographic Circuits", a:"W. Yu, S. Köse", v:"IET Electron. Lett.", k:"journal", thrusts:["hwsec","power"] },
    { y:2015, t:"Time-Delayed Converter-Reshuffling: An Efficient and Secure Power Delivery Architecture", a:"W. Yu, S. Köse", v:"IEEE Embed. Syst. Lett.", k:"journal", thrusts:["power","hwsec"] },
    { y:2015, t:"Distributed Power Delivery with 28 nm Ultra-Small LDO Regulator", a:"I. Vaisband, B. Price, S. Köse, Y. Kolla, E. G. Friedman, J. Fischer", v:"Analog Integr. Circuits Signal Process.", k:"journal", thrusts:["power"] },
    { y:2014, t:"Digitally Controlled Pulse Width Modulator for On-Chip Power Management", a:"I. Vaisband, M. Azhar, E. G. Friedman, S. Köse", v:"IEEE TVLSI", k:"journal", thrusts:["power"] },
    { y:2014, t:"Converter-Gating: A Power Efficient and Secure On-Chip Power Delivery System", a:"O. Uzun, S. Köse", v:"IEEE JETCAS", k:"journal", thrusts:["power","hwsec"] },
    { y:2013, t:"Active Filter Based Hybrid On-Chip DC-DC Converters for Point-of-Load Voltage Regulation", a:"S. Köse, S. Tam, S. Pinzon, B. McDermott, E. G. Friedman", v:"IEEE TVLSI", k:"journal", thrusts:["power"] },
    { y:2013, t:"Power Noise in TSV-Based 3-D Integrated Circuits", a:"I. Savidis, S. Köse, E. G. Friedman", v:"IEEE JSSC", k:"journal", thrusts:["power"] },
    { y:2012, t:"Distributed On-Chip Power Delivery", a:"S. Köse, E. G. Friedman", v:"IEEE JETCAS", k:"journal", thrusts:["power"] },
    { y:2012, t:"Efficient Algorithms for Fast IR Drop Analysis Exploiting Locality", a:"S. Köse, E. G. Friedman", v:"Integration", k:"journal", thrusts:["power"] },
    { y:2011, t:"Effective Resistance of a Two Layer Mesh", a:"S. Köse, E. G. Friedman", v:"IEEE TCAS-II", k:"journal", thrusts:["power"] },
    { y:2011, t:"Shielding Methodologies in the Presence of Power/Ground Noise", a:"S. Köse, E. Salman, E. G. Friedman", v:"IEEE TVLSI", k:"journal", thrusts:["power"] },
    { y:2026, t:"Hibiscus: End-to-end Architectural Simulation Framework for Hybrid SFQ/CMOS-Memory Compute Systems", a:"R. Marsala, Y. Mustafa, P. Tangella, M. Sonji, G. Michelogiannakis, S. Köse, A. Jog, M. E. Belviranli", v:"ISPASS '26", k:"conference", thrusts:["super"] },
    { y:2025, t:"Cyclic QFP Network with Controllable Bistability for Scalable Superconducting Spin Systems", a:"A. Adedokun, S. Köse", v:"SOCC '25", k:"conference", thrusts:["super","ising"] },
    { y:2025, t:"Lightweight Error-Correction Code Encoders in Superconducting Electronic Systems", a:"Y. Mustafa, S. Köse", v:"SOCC '25", k:"conference", thrusts:["super"] },
    { y:2025, t:"Bistable All-Josephson Junction SQUID with Dual Φ-Junctions for State-Controlled Superconducting Circuits", a:"A. Adedokun, Y. Mustafa, S. Köse", v:"ISVLSI '25", k:"conference", thrusts:["super"] },
    { y:2025, t:"A Pseudo-Random Number Generator for Multi-Sequence Generation with Programmable Statistics", a:"J. Wu, E. Elmitwalli, A. Y. Salim, S. Köse, Z. Ignjatovic", v:"ISCAS '25", k:"conference", thrusts:["hwsec","ising"] },
    { y:2025, t:"CMOS Ring Oscillator Ising Machine Using Sub-Harmonic Injection Locking", a:"E. Elmitwalli, Z. Ignjatovic, S. Köse", v:"ISCAS '25", k:"conference", thrusts:["ising"] },
    { y:2025, t:"S-PAM: Superconductor-Semiconductor Interface Circuit with Pulse-Amplitude Modulation", a:"Y. Mustafa, S. Köse", v:"ISCAS '25", k:"conference", thrusts:["super"] },
    { y:2025, t:"Watermarking Superconducting Electronic Circuits in Classical and Quantum Computers", a:"A. Adedokun, Y. Mustafa, S. Köse", v:"MDTS '25", k:"conference", thrusts:["super","hwsec","quant"] },
    { y:2025, t:"MC3: Contention-based Covert Channels Exploiting Shared DRAM Vulnerabilities on System-on-Chips", a:"I. Dagli, J. Crea, S. Seçkiner, Y. Xu, S. Köse, M. E. Belviranli", v:"DATE '25", k:"conference", thrusts:["hwsec"] },
    { y:2025, t:"Trojan Threats in Quantum Computing Hardware: SFQ Control and Readout Vulnerabilities", a:"A. Adedokun, Y. Mustafa, S. Köse", v:"SATC '25", k:"conference", thrusts:["quant","super","hwsec"] },
    { y:2024, t:"Side-Channel Attacks Targeting Classical-Quantum Interface in Quantum Computers", a:"Y. Mustafa, S. Köse", v:"ISCAS '24", k:"conference", thrusts:["quant","hwsec"] },
    { y:2024, t:"Side-Channel Leakage in Superconductive Electronics: Foe or Friend?", a:"Y. Mustafa, S. Köse", v:"MDTS '24", k:"conference", thrusts:["super","hwsec"] },
    { y:2023, t:"Covert Communication Attacks in Chiplet-based 2.5-D Integration Systems", a:"Y. Mustafa, S. Köse", v:"SOCC '23", k:"conference", thrusts:["hwsec"] },
    { y:2023, t:"Modeling and Analysis of Switched-Capacitor Converters as a Multi-port Network for Covert Communication", a:"Y. Mustafa, S. Köse", v:"ISVLSI '23", k:"conference", thrusts:["power","hwsec"] },
    { y:2023, t:"Security Implications of Decoupling Capacitors on Leakage Reduction in Hardware Masking", a:"S. Seçkiner, S. Köse", v:"LASCAS '23", k:"conference", thrusts:["power","hwsec"] },
    { y:2022, t:"Side-channel Leakage in Suzuki Stack Circuits", a:"Y. Mustafa, S. Köse", v:"QC-CSAA '22", k:"conference", thrusts:["super","hwsec"] },
    { y:2021, t:"Combined Side-Channel Attacks on a Lightweight Prince Cipher Implementation", a:"S. Seçkiner, S. Köse", v:"SOCC '21", k:"conference", thrusts:["hwsec"] },
    { y:2021, t:"A Lightweight Hardware-Based Authentication for Secure Smart Grid Energy Storage Units", a:"F. Amsaad, S. Köse", v:"WF-IoT '21", k:"conference", thrusts:["hwsec"] },
    { y:2021, t:"An Efficient and Reliable Lightweight PUF for IoT-based Applications", a:"F. Amsaad, A. Razaque, M. Baza, S. Köse, S. Bhatia, G. Srivastava", v:"ICC Wkshp '21", k:"conference", thrusts:["hwsec"] },
    { y:2021, t:"On the Vulnerability of Hardware Masking in Practical Implementations", a:"H. Dai, S. Köse", v:"GLSVLSI '21", k:"conference", thrusts:["hwsec"] },
    { y:2021, t:"Startup Aware Reliability Enhancement Controller for On-Chip Digital LDOs", a:"L. Wang, S. Köse", v:"GOMACTech '21", k:"conference", thrusts:["power"] },
    { y:2021, t:"Combined Distinguishers to Improve the Preprocessing Efficiency of Physical Leakage Measurements in Side-Channel Attacks", a:"S. Seçkiner, S. Köse", v:"GOMACTech '21", k:"conference", thrusts:["hwsec"] },
    { y:2020, t:"Approximate Voltage Regulation for Energy Efficient Error Tolerable Applications", a:"L. Wang, S. Köse", v:"MWSCAS '20", k:"conference", thrusts:["power"] },
    { y:2020, t:"A Bias and Correlation Free True Random Number Generator Based on Quantized Oscillator Phase under Sub-Harmonic Injection Locking", a:"A. Khanna, E. Elmitwalli, S. Dutta, S. Deng, S. Datta, S. Köse, K. Ni", v:"VLSI '20", k:"conference", thrusts:["hwsec","ising"] },
    { y:2020, t:"A Trusted Authentication Scheme for IoT-Based Smart Grid Applications", a:"F. Amsaad, S. Köse", v:"WF-IoT '20", k:"conference", thrusts:["hwsec"] },
    { y:2019, t:"An NBTI-Aware Digital Low-Dropout Regulator with Adaptive Gain Scaling Control", a:"S. Seçkiner, L. Wang, S. Köse", v:"VLSI-SoC '19", k:"conference", thrusts:["power"] },
    { y:2019, t:"Distributed Digital Low-Dropout Regulators with Phase Interleaving for On-Chip Voltage Noise Mitigation", a:"L. Wang, R. Kuttappa, B. Taskin, S. Köse", v:"SLIP '19", k:"conference", thrusts:["power"] },
    { y:2019, t:"Bus-Invert Coding as a Low-Power Countermeasure Against Correlation Power Analysis Attack", a:"M. A. Vosoughi, L. Wang, S. Köse", v:"SLIP '19", k:"conference", thrusts:["power","hwsec"] },
    { y:2019, t:"Combined Distinguishers to Enhance the Accuracy and Success of Side Channel Analysis", a:"M. A. Vosoughi, S. Köse", v:"ISCAS '19", k:"conference", thrusts:["hwsec"] },
    { y:2019, t:"Leveraging On-Chip Voltage Regulators Against Fault Injection Attacks", a:"M. A. Vosoughi, S. Köse", v:"GLSVLSI '19", k:"conference", thrusts:["power","hwsec"] },
    { y:2019, t:"Reliability Enhanced On-Chip Digital LDO with Limit Cycle Oscillation Mitigation", a:"L. Wang, S. Köse", v:"GOMACTech '19", k:"conference", thrusts:["power"] },
    { y:2019, t:"POWERT Channels: A Novel Class of Covert Communication Exploiting Power Management Vulnerabilities", a:"S. K. Khatamifard, L. Wang, A. Das, S. Köse, U. R. Karpuzcu", v:"HPCA '19", k:"conference", thrusts:["power","hwsec"] },
    { y:2018, t:"When Hardware Security Moves to the Edge and Fog", a:"L. Wang, S. Köse", v:"DSP '18", k:"conference", thrusts:["hwsec"] },
    { y:2018, t:"Process, Voltage, and Temperature-stable Adaptive Duty Cycle based PUF", a:"M. Azhar, S. Köse", v:"ISCAS '18", k:"conference", thrusts:["hwsec"] },
    { y:2018, t:"Reliable On-Chip Voltage Regulation for Sustainable and Compact IoT and Heterogeneous Computing Systems", a:"L. Wang, S. Köse", v:"GLSVLSI '18", k:"conference", thrusts:["power"] },
    { y:2018, t:"Mitigation of NBTI Induced Performance Degradation in On-Chip Digital LDOs", a:"L. Wang, S. K. Khatamifard, U. R. Karpuzcu, S. Köse", v:"DATE '18", k:"conference", thrusts:["power"] },
    { y:2017, t:"Implications of Distributed On-Chip Power Delivery on EM Side-Channel Attacks", a:"A. W. Khan, T. Wanchoo, G. Mumcu, S. Köse", v:"ICCD '17", k:"conference", thrusts:["power","hwsec"] },
    { y:2017, t:"Adaptive Windowing of Insufficient CP for Joint Minimization of ISI and ACI Beyond 5G", a:"B. Peköz, S. Köse, H. Arslan", v:"PIMRC '17", k:"conference", thrusts:[] },
    { y:2017, t:"Secure Intermittent-Robust Computation for Energy Harvesting Device Security and Outage Resilience", a:"A. Roohi, R. DeMara, L. Wang, S. Köse", v:"ATC '17", k:"conference", thrusts:["hwsec"] },
    { y:2017, t:"ThermoGater: Thermally-Aware On-Chip Voltage Regulation", a:"S. K. Khatamifard, L. Wang, W. Yu, S. Köse, U. R. Karpuzcu", v:"ISCA '17", k:"conference", thrusts:["power"] },
    { y:2017, t:"A Lightweight AES Implementation Against Bivariate First-Order DPA Attacks", a:"W. Yu, S. Köse", v:"HASP '17", k:"conference", thrusts:["hwsec"] },
    { y:2017, t:"Efficient and Secure On-Chip Reconfigurable Voltage Regulation for IoT Devices", a:"S. Köse", v:"GLSVLSI '17", k:"conference", thrusts:["power","hwsec"] },
    { y:2017, t:"An Adaptive Senior Design Course with an Emphasis on Undergraduate Course Curriculum", a:"V. T. Alaparthy, S. Köse", v:"MSE '17", k:"conference", thrusts:[] },
    { y:2017, t:"Implications of Noise Insertion Mechanisms of Different Countermeasures Against Side-Channel Attacks", a:"W. Yu, S. Köse", v:"ISCAS '17", k:"conference", thrusts:["hwsec"] },
    { y:2017, t:"On-Chip Sensor Circle Distribution Technique for Real-Time Hardware Trojan Detection", a:"S. Köse, L. Wang, R. F. DeMara", v:"GOMACTech '17", k:"conference", thrusts:["hwsec"] },
    { y:2015, t:"Leveraging On-Chip Voltage Regulators as a Countermeasure Against Side-Channel Attacks", a:"W. Yu, O. A. Uzun, S. Köse", v:"DAC '15", k:"conference", thrusts:["power","hwsec"] },
    { y:2015, t:"Ultra-Fine Grain Power Management at Datapath-Level: Fact or Fiction", a:"M. E. Belviranli, W. Yu, S. Köse", v:"ASPLOS-WACI '15", k:"conference", thrusts:["power"] },
    { y:2014, t:"Regulator-Gating Methodology With Distributed Switched Capacitor Voltage Converters", a:"O. Uzun, S. Köse", v:"ISVLSI '14", k:"conference", thrusts:["power"] },
    { y:2014, t:"Thermal Implications of On-Chip Voltage Regulation: Upcoming Challenges and Possible Solutions", a:"S. Köse", v:"DAC '14", k:"conference", thrusts:["power"] },
    { y:2014, t:"An Enhanced Pulse Width Modulator with Adaptive Duty Cycle and Frequency Control", a:"M. Azhar, S. Köse", v:"ISCAS '14", k:"conference", thrusts:["power"] },
    { y:2014, t:"Regulator-Gating: Adaptive Management of On-Chip Voltage Regulators", a:"S. Köse", v:"GLSVLSI '14", k:"conference", thrusts:["power"] },
    { y:2013, t:"Digitally Controlled Wide Range Pulse Width Modulator for on-Chip Power Supplies", a:"S. Köse, I. Vaisband, E. G. Friedman", v:"ISCAS '13", k:"conference", thrusts:["power"] },
    { y:2013, t:"Current Profile of a Microcontroller to Determine Electromagnetic Emissions", a:"S. Köse, R. M. Secareanu, O. Hartin, E. G. Friedman", v:"ISCAS '13", k:"conference", thrusts:["hwsec"] },
    { y:2012, t:"Distributed Power Delivery for Energy Efficient and Low Power Systems", a:"S. Köse, E. G. Friedman", v:"Asilomar '12", k:"conference", thrusts:["power"] },
    { y:2012, t:"Design Methodology to Distribute On-Chip Power in Next Generation Integrated Circuits", a:"S. Köse, E. G. Friedman", v:"IEEEI '12", k:"conference", thrusts:["power"] },
    { y:2012, t:"Power Delivery in Heterogeneous Integrated Circuits", a:"S. Köse, E. G. Friedman", v:"CAS-FEST '12", k:"conference", thrusts:["power"] },
    { y:2012, t:"An Area Efficient On-Chip Hybrid Voltage Regulator", a:"S. Köse, S. Tam, S. Pinzon, B. McDermott, E. G. Friedman", v:"ISQED '12", k:"conference", thrusts:["power"] },
    { y:2011, t:"Fast Algorithms for IR Voltage Drop Analysis Exploiting Locality", a:"S. Köse, E. G. Friedman", v:"DAC '11", k:"conference", thrusts:["power"] },
    { y:2011, t:"Distributed Power Network Co-Design with On-Chip Power Supplies and Decoupling Capacitors", a:"S. Köse, E. G. Friedman", v:"SLIP '11", k:"conference", thrusts:["power"] },
    { y:2011, t:"Power Grid Noise in TSV-Based 3-D Integrated Systems", a:"I. Savidis, S. Köse, E. G. Friedman", v:"GOMACTech '11", k:"conference", thrusts:["power"] },
    { y:2010, t:"Simultaneous Co-Design of Distributed On-Chip Power Supplies and Decoupling Capacitors", a:"S. Köse, E. G. Friedman", v:"SoCC '10", k:"conference", thrusts:["power"] },
    { y:2010, t:"An Area Efficient Fully Monolithic Hybrid Voltage Regulator", a:"S. Köse, E. G. Friedman", v:"ISCAS '10", k:"conference", thrusts:["power"] },
    { y:2010, t:"Fast Algorithms for Power Grid Analysis Based on Effective Resistance", a:"S. Köse, E. G. Friedman", v:"ISCAS '10", k:"conference", thrusts:["power"] },
    { y:2010, t:"On-Chip Point-of-Load Voltage Regulator for Distributed Power Supplies", a:"S. Köse, E. G. Friedman", v:"GLSVLSI '10", k:"conference", thrusts:["power"] },
    { y:2009, t:"Shielding Methodologies in the Presence of Power/Ground Noise", a:"S. Köse, E. Salman, E. G. Friedman", v:"ISCAS '09", k:"conference", thrusts:["power"] },
    { y:2008, t:"Pseudo-Random Clocking to Enhance Signal Integrity", a:"S. Köse, E. Salman, Z. Ignjatovic, E. G. Friedman", v:"SoCC '08", k:"conference", thrusts:["power"] }
  ],

  thrustLabels: {
    hwsec:"Hardware Security",
    power:"Power Delivery",
    super:"Superconducting Electronics",
    ising:"CMOS Ising",
    quant:"Quantum"
  }
};
