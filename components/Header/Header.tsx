"use client"

import type React from "react"
import Link from "next/link"
import styles from "./Header.module.css"
import { BellIcon, MenuIcon, ArrowLeftIcon, VideoIcon } from "../Icons/Icons"

interface HeaderProps {
  variant?: "default" | "back-only" | "back-with-title" | "simple"
  title?: string
  notificationCount?: number
  onBackClick?: () => void
  onMenuClick?: () => void
  onStartSessionClick?: () => void
}

const Header: React.FC<HeaderProps> = ({
  variant = "default",
  title,
  notificationCount = 0,
  onBackClick,
  onMenuClick,
  onStartSessionClick,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          {(variant === "back-only" || variant === "back-with-title") && (
            <button className={styles.backButton} onClick={onBackClick} aria-label="Go back">
              <ArrowLeftIcon />
              <span className={styles.backText}>Back</span>
            </button>
          )}

          {variant === "back-with-title" && title && <h1 className={styles.pageTitle}>{title}</h1>}

          {(variant === "default" || variant === "simple") && (
            <Link href="/" className={styles.logo}>
              innovr.ai
            </Link>
          )}
        </div>

        <div className={styles.rightSection}>
          {variant === "default" && (
            <>
              <button className={styles.notificationButton} aria-label="Notifications">
                <BellIcon />
                {notificationCount > 0 && <span className={styles.notificationBadge}>{notificationCount}</span>}
              </button>

              <button className={styles.startSessionButton} onClick={onStartSessionClick}>
                <VideoIcon />
                <span>Start A Session</span>
              </button>
            </>
          )}

          {variant !== "default" && (
            <button className={styles.menuButton} onClick={onMenuClick} aria-label="Menu">
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
