cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:davay42/starovdenis.com.git master:gh-pages

cd -