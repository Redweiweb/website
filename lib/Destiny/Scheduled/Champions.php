<?php

namespace Destiny\Scheduled;

use Destiny\Application;
use Psr\Log\LoggerInterface;
use Destiny\Service\Fantasy\ChampionService;

class Champions {

	public function execute(LoggerInterface $log) {
		$app = Application::getInstance ();
		$champions = ChampionService::getInstance ()->getChampions ();
		$cache = $app->getMemoryCache ( 'champions' );
		$cache->write ( $champions );
	}

}