<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<header class="home-header purple-wall mb-6">
	<div class="header-left">
		<div class="header-content">
			<?php
				$titleString = '<span class="opacity-0 pre-hidden">' . str_replace('<br>', '</span><br><span class="opacity-0 pre-hidden">', $attributes['title']) . '</span>';
			?>
			<h1><?php echo $titleString; ?></h1>
			<div class="content-content">
				<?php
					$dom = new DOMDocument();
					$dom->loadHTML($content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
					$paragraphs = $dom->getElementsByTagName('p');
					
					
					foreach ($paragraphs as $paragraph) {
						$paragraph->setAttribute('class', 'opacity-0 pre-hidden');
					}
					
					$finalHTML = $dom->saveHTML();
				?>
				<?php echo $finalHTML; ?>
			</div>
		</div>
	</div>
	<div class="header-right">
		<div class="img-wrap">
			<img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
		</div>
	</div>
</header>