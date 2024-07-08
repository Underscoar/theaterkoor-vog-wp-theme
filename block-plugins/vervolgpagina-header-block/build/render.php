<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<header class="vervolg-header break-from-container purple-wall">
	<div class="header-left">
		<div class="header-content">
			<?php
				$titleString = '<span class="opacity-0 pre-hidden">' . str_replace('<br>', '</span><br><span class="opacity-0 pre-hidden">', $attributes['title']) . '</span>';
			?>
			<div class="content-titles">
				<div class="container">
					<span role="doc-subtitle" class="opacity-0 pre-hidden"><?php echo $attributes['subtitle']; ?></span>
					<h1 <?php if (!$content) { echo 'class="mb-0"'; } ?>><?php echo $titleString; ?></h1>
				</div>
			</div>
			<div class="pseudo-container">
				<div class="content-content">
					<?php
						$finalHTML = '';
						if ($content) {
							$dom = new DOMDocument();
							$dom->loadHTML($content, LIBXML_HTML_NODEFDTD);
							$paragraphs = $dom->getElementsByTagName('*');
							
							foreach ($paragraphs as $paragraph) {
								if ($paragraph->tagName !== 'a' && $paragraph->tagName !== 'i') {
									$paragraph->setAttribute('class', 'opacity-0 pre-hidden');
								}
							}
							
							$finalHTML = $dom->saveHTML();
							// Includes <html> and <body> tags, but HTML_PARSE_NOIMPLIED does not work correctly. For some reason, it nests all the elements.
	
							$finalHTMLStripped = str_replace('<html class="opacity-0 pre-hidden">', '', $finalHTML);
							$finalHTMLStripped = str_replace('</html>', '', $finalHTMLStripped);
							$finalHTMLStripped = str_replace('<body class="opacity-0 pre-hidden">', '', $finalHTMLStripped);
							$finalHTMLStripped = str_replace('</body>', '', $finalHTMLStripped);

							echo $finalHTMLStripped;
						}
					?>
				</div>
			</div>
		</div>
	</div>
	<div class="header-right">
		<div class="img-wrap pre-pre-hidden opacity-0">
			<img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
		</div>
	</div>
</header>