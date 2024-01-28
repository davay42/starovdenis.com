---
title: Jean-Phillippe Côté
subtitle: Благодарность автору WebMidi.js и идея о счете нот от ля как от нуля
date: 2021-05-08
tags: letter
---

>On 7 May 2021, at 02:35, Jean-Philippe Côté <jp@cote.cc> wrote:
>Dear Denis,

>My name is Jean-Philippe Côté. I’m the author of the open source WebMidi.js library. I wanted to personally thank you for filling out the survey back in April. I have started working on v3 and getting user feedback is very valuable to me.
>Regarding your suggestion to allow signal routing between INs and OUTs, you’ll be happy to know that this is something that’s already on my todo list for version 3. Regarding MIDI 2.0, I also wish I could support it but, until the Web MIDI API is updated, there isn’t much I can do.
>By the way, you can check out the new website. It only features the API documentation and a Forum for now but more should come later this year.

>Thank you so much for your time. Cheers! <br/>
>Jean-Philippe Côté <br/>
>https://djip.co / @djipco

Thank you, Jean-Philippe! 

Glad to be helpful in creating such an important media infrastructure element. 

Is the version 3 already useful enough to build a simple, fast and reliable MIDI router app?

I’d like to test it in my open source dev projects. 

Nice website! I’m diving into the wiki for details )

And one more thing… I’m an author of https://chromatone.center – it’s a visual music language project. 

It’s based on 12 notes going A-G# from 0 to 11 (as I use it in the JS scripts) but it’s displayed with colours from red to violet.

I’ve built a couple of web apps with WebMidi.js and have an adapter to convert numbers back to letters, but I’ve got an idea that the library can support it just as an add on without any API changes. The first argument of `output.playNote( )` can easily take ‘0:0’ as ‘A0’, ‘7:3’ as ‘E:3’ and so on. It’s a small thing, but an interesting idea to think about ) And all the concept of standardised numerical pitches is in question ) But it appears rather scientific and very useful! Should I add it to the WebMidi.js wiki? 

Sharing open source ideas )

Cheers!

Denis Starov,
https://github.com/davay42 



## He replied:

>Version 3 is relatively stable and I know some people are already using it. It has a nice suite of unit tests to check that new versions are not breaking anything. However, it is still an alpha and depending on the project’s needs I may need to introduce breaking changes. If stability is paramount, go with version 2. If you can tolerate a little change, you can jump to version 3.

>I checked out Chromatone and it’s pretty cool! Regarding your suggestion, I would be willing to consider it. I am also thinking of being able to pass a Note object to methods such as playNote(). You could add in the [Enhancements to evaluate](https://github.com/djipco/webmidi/wiki#enhancements-to-evaluate) section of the wiki.<br>
>Thanks!