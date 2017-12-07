typer('body')
  .line()
  .line('<span style="color: #2aa198">kashyap@productivity</span>:</span><span style="color: #268bd2">~</span> $ </span>', 0)
  .pause(750)

  // cd ~/
  .continue('cd ~/site', 100)
  .line()
  .line('<span style="color: #2aa198">kashyap@productivity</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(750)

  // ls -al
  .continue('ls -al', 100)
  .line()
  //.line('total 8', 0)
  .line('total 7', 0)
  .line('drwxr-xr-x   14 kashyap  staff      476 Jul 20 16:09 .secretstuff', 0)
  .line('-rw-r--r--    1 kashyap  staff    61572 Mar  4 02:07 aboutme.txt', 0)
  .line('lrwxr-xr-x    1 kashyap  staff       33 Aug  9 00:54 BravesAR -> <a href="bravesar">/bin/bravesar</a>', 0)
  .line('-rw-r--r--    1 kashyap  staff      552 Apr 27 13:27 contactme.txt', 0)
  .line('-rw-r--r--    1 kashyap  staff       37 Aug  6 23:09 futureplans.txt', 0)
  .line('-rw-r--r--    1 kashyap  staff      327 Aug  8 23:47 profexperience.txt', 0)
  .line('lrw-------    1 kashyap  staff     7354 Aug  6 23:09 resume -> <a href="Kashyap Patel.pdf">/etc/resume.pdf</a>', 0)
  .line()
  .line('<span style="color: #2aa198">kashyap@productivity</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1500) // long wait while you look at items in dir

  // cat aboutme.txt
  .continue('cat a', 100)
  .continue('boutme.txt ', 0) // tab completion
  .line()
  .line('Hi, I&apos;m Kashyap!', 0)
  .line()
  .line('I&apos;m an undergrad student at Georgia Tech studying Computer Science. My interests are in Artificial Intelligence and Human-Computer Interaction. I&apos;m studying abroad at GT Lorraine in the Spring and interning at Amazon in the Summer.', 0)
  .line()
  .line('I really like mechanical keyboards. Here&apos;s <a href="https://i.redd.it/r0yru1f2k84z.jpg">mine</a>. I also really like taking pictures, and I&apos;m working on building a portfolio.', 0)
  .line()
  .line('To check out my resume and/or BravesAR, click the respective symlinks up top!', 0)
  .line('Note: BravesAR requires Argon browser (iOS + Android) to create AR elements.', 0)
  .line()
  .line('<span style="color: #2aa198">kashyap@productivity</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1250)

  // cat profexperience.txt && cat futureplans.txt
  .continue('cat p', 100)
  .continue('rofexperience.txt ', 0) // tab completion
  .continue('&& cat f', 100)
  .continue('utureplans.txt ', 0) // tab completion
  .line()
  .line('Spring 2017: Internship at CodeMettle (King Building in Sandy Springs)', 0)
  .line('Created and updated SNMP and Serial translators with Jython for increased compatibility with HTML5 application.', 0)
  .line('Assisted in automation of unit tests via Selenium IDE and performed QA for integration of application to HTML5.', 0)
  .line()
  .line('Summer 2017: Internship at Dispersive Technologies (Alpharetta)', 0)
  .line('Compiled and packaged application for Ubuntu 16.04 systems using Bash scripting, resulting in an additional client base.', 0)
  .line('Added automation of test builds by integrating compilation scripts with Docker and GitLab Runners.', 0)
  .line()
  .line('Fall 2017 (current): Teaching Assistant for Objects and Design at Georgia Tech',0)
  .line('Working with team of Teaching Assistants to design programming projects and coordinate class of 200+ students.', 0)
  .line('Assess and advise students whose objective is to develop an Android app using proper GRASP and SOLID principles.', 0)
  .line()
  .line('Spring 2018: Plan to study abroad at GT Lorraine near Metz, France. Can&apos;t wait to see what Europe has to offer!', 0)
  .line()
  .line('Summer 2018: Interning at Amazon in Seattle, WA! Really excited to spend the summer in Seattle and explore the sights.', 0)
  .line()
  .line('<span style="color: #2aa198">kashyap@productivity</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1250)

  // cat contactme.txt
  .continue('cat c', 100)
  .continue('ontactme.txt ', 0) // tab completion
  .line()
  .line('If you want to reach out:', 0)
  .line('Email: <a href="mailto:kpatel370@gatech.edu?Subject=Hello%20again">kpatel370@gatech.edu</a>', 0)
  .line('Phone: (706)461-4889', 0)
  .line('<a href="https://www.linkedin.com/in/kashyap-patel-58717710"><img src="linkedin.png" alt="LinkedIn" height="21" width="21"></a>', 0)
  .continue(' <a href="https://github.com/kashmoneygt"><img src="github.png" alt="GitHub" height="21" width="21"></a>', 0)
  .line()
  .line('Thanks for visiting! If you didn&apos;t notice, I really like the Solarized color scheme. :)', 0)
  .line()
  .line('<span style="color: #2aa198">kashyap@productivity</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1250)

  // sudo shutdown -h now
  .continue('sudo shutdown -h now', 100)
  .line()

  //.line('</span>', 0)

  .cursor({block: true, blink: 'hard', color: '#fdf6e3'})
;

// use http://manytools.org/image/colorize-filter/ to color icons

// docs: https://www.npmjs.com/package/typer-js
