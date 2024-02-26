<script setup>

</script>

<template lang='pug'>
.flex.flex-col.bg-gray-200.dark-bg-dark-700.shadow.gap-6.text-lg
  slot.z-1
  a.flex.items-center.gap-2.z-6.underline.underline-dotted(
    href="https://www.github.com/davay42"
    target="_blank"
    )
    .i-la-github.text-3xl
    .p-0 davay42
  a.flex.items-center.gap-2.z-6.underline.underline-dotted(
    href="https://t.me/starov"
    target="_blank"
    )
    .i-la-telegram.text-3xl
    .p-0 starov 
  a.flex.items-center.gap-2.z-6.underline.underline-dotted(
    href="https://instagram.com/starov"
    target="_blank"
    )
    .i-la-instagram.text-3xl
    .p-0 starov 
  a.flex.items-center.gap-2.z-6.underline.underline-dotted(
    href="https://www.facebook.com/d.starov"
    target="_blank"
    )
    .i-la-facebook.text-3xl
    .p-0 d.starov 
  a.flex.items-center.gap-2.z-6.underline.underline-dotted(
    href="mailto:me@starovdenis.com"
    )
    .i-la-at.min-w-5.text-3xl
    .p-0 me@starovdenis.com
</template>