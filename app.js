typer('body')
  .line()
  .line('<span style="color: #2aa198">krikorian@home</span>:</span><span style="color: #268bd2">~</span> $ </span>', 0)
  .pause(750)

  // cd ~/
  .continue('cd ~/site', 100)
  .line()
  .line('<span style="color: #2aa198">krikorian@home</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(750)

  // ls -al
  .continue('ls -al', 100)
  .line()
  //.line('total 8', 0)
  .line('total 7', 0)
  .line('drwxr-xr-x   14 krikorian  staff      476 Jul 20 16:09 .secretstuff', 0)
  .line('-rw-r--r--    1 krikorian  staff    61572 Mar  4 02:07 aboutme.txt', 0)
  .line('-rw-r--r--    1 krikorian  staff      552 Apr 27 13:27 contactme.txt', 0)
  .line('-rw-r--r--    1 krikorian  staff       37 Aug  6 23:09 futureplans.txt', 0)
  .line('-rw-r--r--    1 krikorian  staff      327 Aug  8 23:47 profexperience.txt', 0)
  .line('lrw-------    1 krikorian  staff     7354 Aug  6 23:09 resume -> <a href="MatthewKrikorianResume.pdf">/etc/resume.pdf</a>', 0)
  .line()
  .line('<span style="color: #2aa198">krikorian@home</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1500) // long wait while you look at items in dir

  // cat aboutme.txt
  .continue('cat a', 100)
  .continue('boutme.txt ', 0) // tab completion
  .line()
  .line('Hi, I&apos;m Matthew!', 0)
  .line()
  .line('I&apos;m an undergrad student at the University of Illinois at Urbana Champaign studying Computer Engineering. My interests are in Artificial Intelligence and Human-Computer Interaction. I&apos;m currently a junior and interning at ViaSat in the Summer.', 0)
  .line()
  .line('<span style="color: #2aa198">krikorian@home</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1250)

  // cat profexperience.txt && cat futureplans.txt
  .continue('cat p', 100)
  .continue('rofexperience.txt ', 0) // tab completion
  .continue('&& cat f', 100)
  .continue('utureplans.txt ', 0) // tab completion
  .line()
  .line('Summer 2018: Incoming Software Engineering Intern at ViaSat', 0)
  .line()
  .line('Summer 2017: Network Engineering Intern at Verizon', 0)
  .line()
  .line('Summer 2016: Undergraduate Research Assistant at UIUC',0)
  .line()
  .line('<span style="color: #2aa198">krikorian@home</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1250)

  // cat contactme.txt
  .continue('cat c', 100)
  .continue('ontactme.txt ', 0) // tab completion
  .line()
  .line('If you want to reach out:', 0)
  .line('Email: <a href="mailto:krikorn2@illinois.edu?Subject=Hello%20again">krikorn2@illinois.edu</a>', 0)
  .line('Phone: (347)837-5341', 0)
  .line('<a href="https://www.linkedin.com/in/mattkrikorian/"><img src="linkedin.png" alt="LinkedIn" height="21" width="21"></a>', 0)
  .continue(' <a href="https://github.com/matthewkrikorian"><img src="github.png" alt="GitHub" height="21" width="21"></a>', 0)
  .line()
  .line('<span style="color: #2aa198">krikorian@home</span>:</span><span style="color: #268bd2">~/site</span> $ </span>', 0)
  .pause(1250)

  // sudo shutdown -h now
  .continue('sudo shutdown -h now', 100)
  .line()

  //.line('</span>', 0)

  .cursor({block: true, blink: 'hard', color: '#fdf6e3'})
;

// use http://manytools.org/image/colorize-filter/ to color icons

// docs: https://www.npmjs.com/package/typer-js
