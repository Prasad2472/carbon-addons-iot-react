import React, { useMemo } from 'react';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';

import ValueCard from '../ValueCard/ValueCard';
import ImageCard from '../ImageCard/ImageCard';
import DonutCard from '../DonutCard/DonutCard';
import TableCard from '../TableCard/TableCard';
import BarChartCard from '../BarChartCard/BarChartCard';
import PieCard from '../PieCard/PieCard';
import TimeSeriesCard from '../TimeSeriesCard/TimeSeriesCard';
import { CARD_TYPES } from '../../constants/LayoutConstants';

/**
 * This component decides which card component to render when passed a certain card type
 * It also caches some properties between renders to speed performance
 */
const CardRenderer = ({
  style, // eslint-disable-line
  card, // eslint-disable-line
  card: { availableActions, type, dataSource, isExpanded, ...others }, // eslint-disable-line
  onCardAction, // eslint-disable-line
  i18n, // eslint-disable-line
  dashboardBreakpoints, // eslint-disable-line
  cardDimensions, // eslint-disable-line
  dashboardColumns, // eslint-disable-line
  rowHeight, // eslint-disable-line
  isLoading, // eslint-disable-line
  isEditable, // eslint-disable-line
  breakpoint, // eslint-disable-line
  ...gridProps
}) => {
  // Speed up performance by caching
  const cachedActions = useMemo(
    () =>
      merge(availableActions, {
        range: !isEmpty(dataSource), // all cards should have the range picker
        expand:
          type === CARD_TYPES.IMAGE || type === CARD_TYPES.TIMESERIES || type === CARD_TYPES.TABLE, // image and line chart cards should have expand
      }),
    [availableActions, dataSource, type]
  );

  const cachedExpandedStyle = useMemo(
    () => (isExpanded ? merge({ height: '100%', width: '100%', padding: '50' }, style) : style),
    [isExpanded, style]
  );

  return (
    <div key={card.id} {...gridProps} style={cachedExpandedStyle}>
      {type === CARD_TYPES.VALUE ? (
        <ValueCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : type === CARD_TYPES.IMAGE ? (
        <ImageCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : type === CARD_TYPES.TIMESERIES ? (
        <TimeSeriesCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : type === CARD_TYPES.TABLE ? (
        <TableCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : type === CARD_TYPES.DONUT ? (
        <DonutCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : type === CARD_TYPES.PIE ? (
        <PieCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : type === CARD_TYPES.BAR ? (
        <BarChartCard
          {...others}
          key={card.id}
          availableActions={cachedActions}
          dataSource={dataSource}
          type={type}
          i18n={i18n}
          isLoading={card.isLoading || isLoading}
          isEditable={isEditable}
          onCardAction={onCardAction}
          breakpoint={breakpoint}
          dashboardBreakpoints={dashboardBreakpoints}
          dashboardColumns={dashboardColumns}
          cardDimensions={cardDimensions}
          rowHeight={rowHeight}
        />
      ) : null}
    </div>
  );
};
export default CardRenderer;