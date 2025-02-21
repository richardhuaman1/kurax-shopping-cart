import type { CSSProperties } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';

import styles from './Drawer.module.css';
import { getDirectionStyle, getRandomId } from './utils';

type DrawerProps = {
  open: boolean;
  onClose?: () => void;
  direction: 'left' | 'right' | 'top' | 'bottom';
  lockBackgroundScroll?: boolean;
  children?: React.ReactNode;
  duration?: number;
  overlayOpacity?: number;
  overlayColor?: string;
  enableOverlay?: boolean;
  style?: React.CSSProperties;
  zIndex?: number;
  size?: number | string;
  className?: string | undefined;
  customIdSuffix?: string | undefined;
};

function Drawer(props: DrawerProps) {
  const {
    open,
    onClose = () => {},
    children,
    style,
    enableOverlay = true,
    overlayColor = '#000',
    overlayOpacity = 0.4,
    zIndex = 100,
    duration = 500,
    direction,
    size = 340,
    className,
    customIdSuffix,
    lockBackgroundScroll = false,
  } = props;

  const bodyRef = useRef<HTMLBodyElement | null>(null);
  const idSuffix = useMemo(() => customIdSuffix || getRandomId(), [customIdSuffix]);

  useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current = window.document.querySelector('body');

      if (bodyRef.current && lockBackgroundScroll) {
        if (open) {
          bodyRef.current.style.overflow = 'hidden';
        } else {
          bodyRef.current.style.overflow = '';
        }
      }
    };

    updatePageScroll();
  }, [open]);

  const overlayStyles: CSSProperties = {
    backgroundColor: `${overlayColor}`,
    opacity: `${overlayOpacity}`,
    zIndex,
  };

  const drawerStyles: CSSProperties = {
    zIndex: zIndex + 1,
    transitionDuration: `${duration}ms`,
    ...getDirectionStyle(direction, size),
    ...style,
  };

  return (
    <div id={`drawer_${idSuffix}`} className="drawer">
      <input
        type="checkbox"
        id={`drawer_checkbox_${idSuffix}`}
        className={styles.drawerCheckbox}
        onChange={onClose}
        checked={open}
      />
      <nav
        role="navigation"
        id={`drawer_container_${idSuffix}`}
        style={drawerStyles}
        className={`${styles.drawerContainer} ${className}`}
      >
        {children}
      </nav>
      {enableOverlay && (
        <label
          htmlFor={`drawer_checkbox_${idSuffix}`}
          id={`drawer_overlay_${idSuffix}`}
          className={styles.drawerOverlay}
          style={overlayStyles}
        />
      )}
    </div>
  );
}

export { Drawer };
