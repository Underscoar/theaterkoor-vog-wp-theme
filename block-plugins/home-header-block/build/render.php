<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<header class="home-header break-from-container purple-wall">
	<div class="header-left">
		<div class="header-content">
			<?php
				$titleString = '<span class="opacity-0 pre-hidden">' . str_replace('<br>', '</span><br><span class="opacity-0 pre-hidden">', $attributes['title']) . '</span>';
			?>
			<h1><?php echo $titleString; ?></h1>
			<div class="content-content">
				<?php
					$finalHTML = '';
					if ($content) {
						$dom = new DOMDocument();
						$dom->loadHTML($content, LIBXML_HTML_NODEFDTD);
						if ($dom->encoding === null) {
							$dom->loadHTML('<?xml encoding="utf-8" ?>' . $content);
							$node = $dom->firstChild;
							while (!($node instanceof DOMProcessingInstruction)) {
								$node = $node->nextSibling;
							}
							$node->parentNode->removeChild($node);
						}
						$paragraphs = $dom->getElementsByTagName('*');
						
						foreach ($paragraphs as $paragraph) {
							if ($paragraph->tagName !== 'a' && $paragraph->tagName !== 'i') {
								$paragraph->setAttribute('class', 'opacity-0 pre-hidden');
							}
						}
						
						$finalHTML = $dom->saveHTML();
						// Includes <html> and <body> tags, but HTML_PARSE_NOIMPLIED does not work correctly. For some reason, it nests all the elements.

						$finalHTMLStripped = str_replace('<html>', '', $finalHTML);
						$finalHTMLStripped = str_replace('</html>', '', $finalHTMLStripped);
						$finalHTMLStripped = str_replace('<body>', '', $finalHTMLStripped);
						$finalHTMLStripped = str_replace('</body>', '', $finalHTMLStripped);
					}
				?>
				<?php echo $finalHTMLStripped; ?>
			</div>
		</div>
	</div>
	<div class="header-right">
		<div class="img-wrap">
			<img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
		</div>
	</div>
</header>