(() => {
  const article = document.querySelector('.markdown-body');
  const toc = document.querySelector('#article-toc');
  const headings = article.querySelectorAll('h2[id], h3[id]');
  for (const heading of headings) {
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent;
    if (heading.tagName === 'H3') link.className = 'toc-child';
    toc.append(link);
  }
  if (headings.length) toc.closest('aside').hidden = false;
})();
