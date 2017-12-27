typer('body')
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~</span>]$ </span>', 0)
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
  .line('-rw-r--r--@   1 krikorian  staff     7354 Dec  6 23:09 resume -> <a href="/img/MatthewKrikorianResume.pdf">resume.pdf</a>', 0)
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
  .line('I&apos;m an undergraduate student at the <a style="text-decoration:none;" href="https://ece.illinois.edu/">University of Illinois @Urbana Champaign</a> studying Computer Engineering. My interests lie in both technology and finance, and keep up with both avidly. I&apos;m currently a junior and will be interning at <a style="text-decoration:none;" href="https://www.viasat.com/">@ViaSat</a> in the summer of 2018.', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  .continue('cat e', 100)
  .continue('ducation.txt ', 0) // tab completion
  .line()
//  .line('2018 - 2019 <span style="color: #f08300">->Master&apos;s Degree</span> in Electrical and Computer Engineering <span style="color: #53d1ed">@UIUC</span>', 0)
//  .line()
  .line('2015 - 2018 <span style="color: #f08300">->Bachelor&apos;s Degree</span> in Computer Engineering <span style="color: #53d1ed">@UIUC</span>', 0)
  .line()
  .line('2011 - 2015 <span style="color: #f08300">->High School Diploma</span> in Electro-Mechanical Engineering <span style="color: #53d1ed">@BrooklynTechnicalHS</span>', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  .continue('cat e', 100)
  .continue('xperience.txt ', 0) // tab completion
  .line()
  .line('Summer 2018<span style="color: #f08300"> ->Incoming Software Engineering Intern</span> <span style="color: #53d1ed">@ViaSat</span>', 0)
  .line()
  .line('Summer 2017<span style="color: #f08300"> ->Network Engineering Intern</span> <span style="color: #53d1ed">@Verizon</span>', 0)
  .line()
  .line('Summer 2016<span style="color: #f08300"> ->Undergraduate Researcher</span> <span style="color: #53d1ed">@UIUC</span>', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  // cat contactme.txt
  .continue('cat f', 100)
  .continue('indme.txt ', 0) // tab completion
  .line()
  .line('Email: <a href="mailto:krikorn2@illinois.edu?Subject=Hello%20again">krikorn2@illinois.edu</a>', 0)
  .line('Phone: (347)837-5341', 0)
  .line()
  .line('Favorite theme: monokai (if it wasn&apos;t obvious)', 0)
  .line()
  .line('<a href="https://www.linkedin.com/in/mattkrikorian/"><img src="/img/linkedin.png" alt="LinkedIn" height="21" width="21"></a>', 0)
  .continue(' <a href="https://github.com/matthewkrikorian"><img src="/img/github.png" alt="GitHub" height="21" width="21"></a>', 0)
  .continue(' <a href="https://www.facebook.com/kricketmaster"><img src="/img/facebook.png" alt="Facebook" height="21" width="21"></a>', 0)
  .continue(' <a href="https://www.instagram.com/mattkrikorian/"><img src="/img/instagram.png" alt="Instagram" height="21" width="21"></a>', 0)
  .continue(' <a href="https://open.spotify.com/user/krikorn2"><img src="/img/spotify.png" alt="Spotify" height="21" width="21"></a>', 0)
  .line()
  .line('[<span style="color: #df005e">krikorian</span><span style="color: #e0d55a">@home</span>:</span><span style="color: #53d1ed">~/site</span>]$ </span>', 0)
  .pause(1250)

  // sudo shutdown -h now
  .continue('sudo kill -9 $(ps -p $PPID -o ppid=)')

  //.line('</span>', 0)

  .cursor({block: true, blink: 'hard', color: '#f6f7ee'})
;
