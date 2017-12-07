typer('body')
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(750)

  // cd ~/
  .continue('cd ~/site', 100)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(750)

  // ls -al
  .continue('la', 100)
  .line()
  //.line('total 8', 0)
  .line('total 5', 0)
  .line('-rw-r--r--@   1 krikorian  staff     7354 Dec  6 23:09 resume -> <a href="MatthewKrikorianResume.pdf">/etc/resume.pdf</a>', 0)
  .line('-rw-r--r--    1 krikorian  staff    61572 Dec  4 02:07 aboutme.txt', 0)
  .line('-rw-r--r--    1 krikorian  staff    61572 Dec  4 02:07 education.txt', 0)
  .line('-rw-r--r--    1 krikorian  staff      552 Dec  6 13:27 findme.txt', 0)
  .line('-rw-r--r--    1 krikorian  staff      327 Dec  6 23:47 experience.txt', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1500) // long wait while you look at items in dir

  .continue('cat a', 100)
  .continue('boutme.txt ', 0) // tab completion
  .line()
  .line('Hi, I&apos;m Matthew!', 0)
  .line()
  .line('I&apos;m an undergraduate student at the University of Illinois at Urbana Champaign studying Computer Engineering. My interests lie in both the technology and finance, and would keep up with both very avidly. I&apos;m currently a junior and will be interning at ViaSat in the Summer.', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  .continue('cat e', 100)
  .continue('xperience.txt ', 0) // tab completion
  .line()
  .line('Summer 2018: Incoming Software Engineering Intern at ViaSat', 0)
  .line()
  .line('Summer 2017: Network Engineering Intern at Verizon', 0)
  .line()
  .line('Summer 2016: Undergraduate Research Assistant at UIUC',0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  // cat contactme.txt
  .continue('cat f', 100)
  .continue('indme.txt ', 0) // tab completion
  .line()
  .line('How you can contact me:', 0)
  .line('Email: <a href="mailto:krikorn2@illinois.edu?Subject=Hello%20again">krikorn2@illinois.edu</a>', 0)
  .line('Phone: (347)837-5341', 0)
  .line()
  .line('<a href="https://www.linkedin.com/in/mattkrikorian/"><img src="linkedin.png" alt="LinkedIn" height="21" width="21"></a>', 0)
  .continue(' <a href="https://github.com/matthewkrikorian"><img src="github.png" alt="GitHub" height="21" width="21"></a>', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  // sudo shutdown -h now
  .continue('kill -9 $(ps -p $PPID -o ppid=)')

  //.line('</span>', 0)

  .cursor({block: true, blink: 'hard', color: '#f6f7ee'})
;
